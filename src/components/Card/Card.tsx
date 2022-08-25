import React, { FC } from "react";

export interface CardProps {
    children: string
};

export const Card: FC<CardProps> = ({ children }) => {

    return (
        <div>
            {children}
        </div>
    )
};