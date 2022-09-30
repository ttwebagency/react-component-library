import React from "react";

type IconProps = {
    color?: string,
    size?: number,
    iconName?: string,
}

const getPath = (iconName: any) => {
    switch(iconName) {
        case "home":
            return (
                <>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z" />
                </>
            )
        default:
            return '';
    }
}

export const Icon = ({ iconName, color = "#000", size = 18 }: IconProps) => {
    
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width={size}
            height={size}
            fill={color}
        >
            {getPath(iconName)}
        </svg>
    );
}