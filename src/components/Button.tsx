import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className = "", type = "button", ...props }: ButtonProps) => (
	<button
		type={type}
		className={`inline-flex items-center justify-center rounded-24px bg-shuttle-gray-50 px-4 py-3 text-sm text-[#252a31] transition-colors hover:bg-[#e9ebee] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-#083fe5 disabled:pointer-events-none disabled:opacity-50 ${className}`}
		{...props}
	/>
);

export default Button;
