import React, { FC } from "react";
import styled from "styled-components";

const ContainerStyles = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

type ContainerProps = {
    children: any
}

export const Container: FC<ContainerProps> = ({ children }) => (
    <ContainerStyles>
        {children}
    </ContainerStyles>
);