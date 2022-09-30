import React, { FC } from "react";

type LabelProps = {
    name: string,
    children: string
};

export const Label: FC<LabelProps> = ({ name, children }) => {
     
    return (
        <label htmlFor={name}>{children}</label>
    )
};