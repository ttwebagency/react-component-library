import React, { FC } from "react";

export interface LinkProps {
    url: string,
    target?: string,
    children: string
}

export const Link: FC<LinkProps> = ({ url, target, children }) => {

    return (
        <a href={url} {...{ target }}>{children}</a>
    )
};