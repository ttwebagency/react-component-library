import React, { FC } from "react";

type LinkProps = {
    url: string,
    openAsTab?: boolean,
    children: string
}

export const Link: FC<LinkProps> = ({ url, openAsTab, children }) => {

    return (
        <a href={url} target={openAsTab ? "blank" : undefined}>{children}</a>
    )
};