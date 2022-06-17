import React, { FC } from "react";

export interface ButtonProps {
	type?: "button" | "submit" | "reset" | undefined,
	url?: string,
	onClick?: () => void,
	size?: "small" | "medium" | "large",
	disabled?: boolean,
	children: string
};

const Button: FC<ButtonProps> = ({ type, url, onClick, size, disabled, children, ...props }) => {

	// Check if the component has a url prop value that matches those listed
	const isLink = url && (url.includes("http") || url.startsWith("#") || url.startsWith("mailto") || url.startsWith("/"));

	const renderAsLink = () =>
		<a href={url} role="button">{children}</a>

	const renderAsButton = () =>
	<button {...{ type, size, onClick, disabled }}>{children}</button>

	return (
		/*
			If 'url' prop is passed into the component with a value,
			render as a link by calling the renderAsLink() method, otherwise,
			render as a button by calling the renderAsButton() method.
		*/
		isLink ? renderAsLink() : renderAsButton()
	)
};

export default Button;