import React, { FC } from "react";

export interface LabelProps {
    name: string,
    children: string
};

const Label: FC<LabelProps> = ({ name, children }) => {
     
    return (
        <label htmlFor={name}>{children}</label>
    )
};

export default Label;