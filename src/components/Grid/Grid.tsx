import React, { FC } from "react";
import styled from "styled-components";

const GridStyles = styled.div`
    display: flex;
`;

export interface GridProps {
    children: any,
}

export const Grid: FC<GridProps> = ({ children }) => (
    <GridStyles>
        {children}
    </GridStyles>
);