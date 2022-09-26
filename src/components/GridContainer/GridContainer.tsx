import React, { FC } from 'react';
import styled from 'styled-components';

const GridContainerStyles = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

export interface GridContainerProps {
    children: any
}

export const GridContainer: FC<GridContainerProps> = ({ children }) => (
    <GridContainerStyles>
        {children}
    </GridContainerStyles>
);