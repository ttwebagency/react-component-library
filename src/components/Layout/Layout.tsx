import React, { FC } from "react";

type LayoutProps = {
    children: any
};

export const Layout: FC<LayoutProps> = ({ children }) => {

    return (
        <main role="main">
            {children}
        </main>
    )
};