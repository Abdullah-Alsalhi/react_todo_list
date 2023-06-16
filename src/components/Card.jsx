import { Divider } from "./index";

const Card = ({
	// eslint-disable-next-line react/prop-types
	title = null,
	// eslint-disable-next-line react/prop-types
	children,
	// eslint-disable-next-line react/prop-types
	className = "",
	...props
}) => (
	<div
		className={`rounded-lg p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ${className}`}
		{...props}
	>
		{title && (
			<>
				<h5 className="mb-2 text-xl font-medium leading-tight text-warning-100">
					{title}
				</h5>
				<Divider />
			</>
		)}
		{children}
	</div>
);

// dark:bg-danger-700

export default Card;
