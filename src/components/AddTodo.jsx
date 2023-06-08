import { InputField, TextAreaField } from "./index";
import { IoIosAddCircle, IoMdUndo } from "react-icons/io";
const AddTodo = () => {
	return (
		<div className="block my-12">
			<InputField label={"new Todo"} />
			<TextAreaField label={"new Todo description"} />
			<div className="flex items-center justify-center mt-12 mb-0">
				<IoIosAddCircle className="text-green-600  hover:text-green-800 mx-3 text-5xl hover:cursor-pointer" />
				<IoMdUndo className="text-red-600 text-5xl hover:text-red-800  mx-3 hover:cursor-pointer" />
			</div>
		</div>
	);
};
export default AddTodo;
