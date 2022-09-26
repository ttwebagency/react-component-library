import React from "react";

export type ImageProps = {
    src: string,
    height: string,
    width: string,
    alt: string
}

export const Image = ({ src, height, width, alt }: ImageProps) => {

    return (
        <img {...{ src, height, width, alt }} />
    )
};