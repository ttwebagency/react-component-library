import React, { FC } from "react";
import styled from "styled-components";

const GridStyles = styled("div")<GridProps>`
    display: flex;
    flex-direction: ${props => props.isRow ? "row" : "column"};
`;

export interface GridProps {
    children: any,
    isRow?: boolean
}

export const Grid: FC<GridProps> = ({ isRow = false, children }) => (
    <GridStyles {...{isRow}}>
        {children}
    </GridStyles>
);