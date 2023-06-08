import { Ripple, initTE } from "tw-elements";
initTE({ Ripple });
const Button = ({
	// eslint-disable-next-line react/prop-types
	title = "Button",
	// eslint-disable-next-line react/prop-types
	className = "",
	// eslint-disable-next-line react/prop-types
	rippleColor = "light",
	// eslint-disable-next-line react/prop-types
	focusBgColor = "bg-primary-600",
	// eslint-disable-next-line react/prop-types
	bgColor = "bg-primary",
	// eslint-disable-next-line react/prop-types
	hoverBgColor = "bg-primary",
	// eslint-disable-next-line react/prop-types
	ActiveBgColor = "bg-primary-700",
	// eslint-disable-next-line react/prop-types
	children,
	...props
}) => (
	<button
		{...props}
		type="button"
		data-te-ripple-init
		data-te-ripple-color={rippleColor}
		className={`inline-block rounded ${bgColor} px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:${hoverBgColor} hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:${focusBgColor} focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:${ActiveBgColor} active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] ${className}`}
	>
		{children ? children : title}
	</button>
);

export default Button;
