import { InputField, TextAreaField } from "./index";
import { IoIosAddCircle, IoMdUndo } from "react-icons/io";
// eslint-disable-next-line react/prop-types
const AddTodo = ({ handleAddNewTodo, handleChangeNewTodo, todo }) => {
	return (
		<div className="block my-12">
			<InputField
				label={"new Todo"}
				handleChange={handleChangeNewTodo.handleTitleChange}
				title={todo.title}
			/>
			<TextAreaField
				label={"new Todo description"}
				handleChange={handleChangeNewTodo.handleDescriptionChange}
				description={todo.description}
			/>
			<div className="flex items-center justify-center mt-12 mb-0">
				<IoIosAddCircle
					onClick={() => handleAddNewTodo()}
					className="text-green-600  hover:text-green-800 mx-3 text-5xl hover:cursor-pointer"
				/>
				<IoMdUndo className="text-red-600 text-5xl hover:text-red-800  mx-3 hover:cursor-pointer" />
			</div>
		</div>
	);
};
export default AddTodo;
