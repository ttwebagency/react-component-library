import React, { FC } from "react";
import styled from "styled-components";

const CardStyling = styled.div`
    border: 1px solid #eee;
    border-radius: 4px;
    width: 100%;
`;

const CardInnerStyling = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 2rem;
    height: 100%;
    justify-content: space-between;
`;

const CardContentStyling = styled.div`
    flex-grow: 1;
`;

export interface CardProps {
    children: any
};

export const Card: FC<CardProps> = ({ children }) => {

    return (
        <CardStyling>
            <CardInnerStyling>
                <CardContentStyling>
                    {children}
                </CardContentStyling>
            </CardInnerStyling>
        </CardStyling>        
    )
};