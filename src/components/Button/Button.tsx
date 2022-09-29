import React, { FC } from "react";
import styled from "styled-components";

// Shared CSS properties for the <button> and link elements
const ButtonStyle = styled.button`
	display: inline-block;
	text-decoration: none;
	text-align: center;
`;

type ButtonProps = {
	type?: "button" | "submit" | "reset" | undefined,
	url?: string,
	onClick?: () => void,
	size?: "small" | "medium" | "large",
	openAsTab?: boolean,
	disabled?: boolean,
	children: string
};

export const Button: FC<ButtonProps> = ({ type = "button", url, onClick, size, openAsTab, disabled, children }) => {

	// Check if the component has a url prop value that matches those listed
	const isLink = url && (url.includes("http") || url.startsWith("#") || url.startsWith("mailto") || url.startsWith("/"));

	// This method will render an <a> link styled to appear as a button
	const renderAsLink = () =>
		<ButtonStyle as="a" href={url} role="button" target={openAsTab ? "blank" : undefined}>{children}</ButtonStyle>

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