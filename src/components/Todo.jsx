import { AiFillDelete, AiFillEdit, AiOutlineFileDone } from "react-icons/ai";

const Todo = ({
	// eslint-disable-next-line react/prop-types
	title = null,
	// eslint-disable-next-line react/prop-types
	description = "",
	// eslint-disable-next-line react/prop-types
	className = "",
	// eslint-disable-next-line react/prop-types, no-unused-vars
	status = false,
	// eslint-disable-next-line react/prop-types
	handleDelete = null,
	// eslint-disable-next-line react/prop-types
	handleEdit = null,
	// eslint-disable-next-line react/prop-types
	handleisDone = null,
	...props
}) => (
	<div
		className={`my-3 shadow-2xl block rounded-lg bg-stone-800 p-6 ${className}`}
		{...props}
	>
		{title && (
			<div className="flex justify-between items-center">
				<div className="">
					<h5 className="text-start mb-2 text-xl font-medium leading-tight text-white">
						{title}
					</h5>
					<h6 className="text-start mb-2 text-sm font-medium leading-tight text-warning-100">
						{description}
					</h6>
				</div>
				<div className="justify-self-end">
					<div className="flex justify-end items-center">
						<AiOutlineFileDone
							className="text-orange-600  mx-1 hover:text-orange-700 text-2xl hover:cursor-pointer"
							onClick={() => handleisDone()}
						/>
						<AiFillEdit
							className="text-green-600 text-2xl mx-1 hover:text-green-700 hover:cursor-pointer"
							onClick={() => handleEdit()}
						/>
						<AiFillDelete
							className="text-red-600 text-2xl mx-1 hover:text-red-700 hover:cursor-pointer"
							onClick={() => handleDelete()}
						/>
					</div>
				</div>
			</div>
		)}
	</div>
);

export default Todo;
