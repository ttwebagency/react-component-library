import React, { FC, ReactNode } from "react";

interface HeadingProps {
    level: 1 | 2 | 3 | 4 | 5 | 6,
    className: string,
    children?: ReactNode;
};

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const Heading: FC<HeadingProps> = ({ level, className = "", children, ...others }: HeadingProps) => {

    const Tag = `h${level}` as HeadingTag;

    {/* Use: <Heading level={1}> ... </Heading> */}

    return (
        <Tag className={`${className}`} {...others}>{children}</Tag>
    )
};