import React, { FC } from "react";

export interface LayoutProps {
    children: string
};

export const Layout: FC<LayoutProps> = ({ children }) => {

    return (
        <main role="main">
            {children}
        </main>
    )
};