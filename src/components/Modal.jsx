const Modal = ({
	// eslint-disable-next-line react/prop-types
	children,
	// eslint-disable-next-line react/prop-types
	className = "",
	// eslint-disable-next-line react/prop-types
	show = false,
	// eslint-disable-next-line react/prop-types
	...props
}) => (
	<div
		className={`${
			show ? "" : "hidden"
		} container mx-auto min-h-screen flex justify-center items-center inset-0 fixed top-0 left-0 z-1 bg-opacity-50 bg-stone-700 dark:bg-slate-600 ${className}`}
		{...props}
	>
		{children}
	</div>
);

export default Modal;
