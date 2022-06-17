import React, { FC } from "react";

export interface ButtonProps {
	type: "button" | "submit" | "reset" | undefined,
	onClick?: () => void,
	size?: "small" | "medium" | "large",
	disabled?: boolean,
	children: string
};

const Button: FC<ButtonProps> = ({ type, size, onClick, disabled, children, ...props }) => {
	return (
		<button {...{ type, size, onClick, disabled }}>{children}</button>
	)
};

export default Button;