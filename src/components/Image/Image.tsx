import React from "react";

type ImageProps = {
    src: string,
    height: string,
    width: string,
    alt: string,
    url?: string,
    openAsTab?: boolean,
    lazyLoad?: boolean,
    fetchpriority?: "high" | "low" | "auto",
}

export const Image = ({ src, height, width, alt, url, openAsTab, lazyLoad, fetchpriority }: ImageProps) => {

    const isLink = url && (url.includes("http") || url.startsWith("#") || url.startsWith("mailto") || url.startsWith("/"));

    const renderLink = () =>
        <a href={url} target={openAsTab ? "blank" : undefined}>
            <img {...{ src, fetchpriority, height, width, alt }} loading={lazyLoad ? "lazy" : "eager" } />
        </a>

    const renderImage = () =>
        <img {...{ src, fetchpriority, height, width, alt}} loading={lazyLoad ? "lazy" : "eager"} />
    
    return (
        isLink ? renderLink() : renderImage()
    );
};