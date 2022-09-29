import React, { FC } from "react";

export interface LinkProps {
    url: string,
    openAsTab?: boolean,
    children: string
}

export const Link: FC<LinkProps> = ({ url, openAsTab, children }) => {

    return (
        <a href={url} target={openAsTab ? "blank" : undefined}>{children}</a>
    )
};