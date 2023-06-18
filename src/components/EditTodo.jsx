/* eslint-disable react/prop-types */
import { InputField, TextAreaField, CheckBoxField } from "./index";
import { IoIosAddCircle, IoMdUndo } from "react-icons/io";
// eslint-disable-next-line react/prop-types
const EditTodo = ({ todo, handleEditTodoChange, handleChangeNewTodo }) => {
	return (
		<div className="block my-12">
			<InputField
				textColor={`text-black`}
				label={"new Todo"}
				handleChange={handleChangeNewTodo.handleTitleChange}
				title={todo.title}
			/>
			<TextAreaField
				textColor={`text-black`}
				label={"new Todo description"}
				handleChange={handleChangeNewTodo.handleDescriptionChange}
				description={todo.description}
			/>
			<CheckBoxField
				type="checkbox"
				label={"Completed ?"}
				handleChange={handleChangeNewTodo.handleTodoStatusChange}
			/>
			<div className="flex items-center justify-center mt-12 mb-0">
				<IoIosAddCircle
					onClick={() => handleEditTodoChange()}
					className="text-green-600  hover:text-green-800 mx-3 text-5xl hover:cursor-pointer"
				/>
				<IoMdUndo className="text-red-600 text-5xl hover:text-red-800  mx-3 hover:cursor-pointer" />
			</div>
		</div>
	);
};
export default EditTodo;
