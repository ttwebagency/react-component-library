import React, { FC } from "react";

export interface ImageProps {
    src: string,
    height: string,
    width: string,
    alt: string
}

export const Image: FC<ImageProps> = ({ src, height, width, alt }) => {

    return (
        <img {...{ src, height, width, alt }} />
    )
};