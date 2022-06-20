import React, { FC } from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
	display: inline-block;
	text-decoration: none;
	text-align: center;
`;

export interface ButtonProps {
	type?: "button" | "submit" | "reset" | undefined,
	url?: string,
	onClick?: () => void,
	size?: "small" | "medium" | "large",
	target?: string,
	disabled?: boolean,
	children: string
};

const Button: FC<ButtonProps> = ({ type, url, onClick, size, target, disabled, children, ...props }) => {

	// Check if the component has a url prop value that matches those listed
	const isLink = url && (url.includes("http") || url.startsWith("#") || url.startsWith("mailto") || url.startsWith("/"));

	// This method will render an <a> link styled to appear as a button
	const renderAsLink = () =>
		<a href={url} role="button" {...{ target }}>{children}</a>

	// This method will render a <button> element
	const renderAsButton = () =>
		<ButtonStyle {...{ type, size, onClick, disabled }}>{children}</ButtonStyle>

	return (
		/*
			If 'url' prop is passed into the component with a value,
			render as a link element by calling the renderAsLink() method, otherwise,
			render as a <button> element by calling the renderAsButton() method.
		*/
		isLink ? renderAsLink() : renderAsButton()
	)
};

export default Button;