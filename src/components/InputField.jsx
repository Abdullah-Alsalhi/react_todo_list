/* eslint-disable react/prop-types */
// Initialization for ES Users
import { Input, initTE } from "tw-elements";

initTE({ Input });
// eslint-disable-next-line react/prop-types
const InputField = ({
	label,
	type = "text",
	textColor,
	handleChange,
	title,
}) => {
	return (
		<div className="relative mb-3">
			<input
				type={type}
				className={`peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight ${textColor} transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:${textColor} focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]`}
				onChange={(e) => handleChange(e.target.value)}
				value={title}
			/>
			<label
				htmlFor="title"
				className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
			>
				{label}
			</label>
		</div>
	);
};

export default InputField;
