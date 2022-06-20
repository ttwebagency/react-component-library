import React, { FC } from "react";

export interface LayoutProps {
    children: string
};

const Layout: FC<LayoutProps> = ({ children }) => {

    return (
        <main role="main">
            {children}
        </main>
    )
};

export default Layout;