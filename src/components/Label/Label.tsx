import React, { FC } from "react";

export interface LabelProps {
    name: string,
    children: any
};

export const Label: FC<LabelProps> = ({ name, children }) => {
     
    return (
        <label htmlFor={name}>{children}</label>
    )
};