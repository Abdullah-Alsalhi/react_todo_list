/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { AiFillDelete, AiFillEdit, AiOutlineFileDone } from "react-icons/ai";

const Todo = ({
	todo,
	className = "",
	handleDelete,
	handleEdit,
	handleIsDone,
	...props
}) => (
	<div
		className={`my-3 shadow-2xl block rounded-lg  ${
			todo.isDone ? "bg-green-800" : "bg-stone-800"
		} p-6 ${className}`}
		{...props}
	>
		{todo.title && (
			<div className="flex justify-between items-center">
				<div className="">
					<h5 className="text-start mb-2 text-xl font-medium leading-tight text-white">
						{todo.title}
					</h5>
					<h6 className="text-start mb-2 text-sm font-medium leading-tight text-warning-100">
						{todo.description}
					</h6>
				</div>
				<div className="justify-self-end">
					<div className="flex justify-end items-center">
						<AiOutlineFileDone
							className="text-orange-600  mx-1 hover:text-orange-700 text-2xl hover:cursor-pointer"
							onClick={() => handleIsDone()}
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
