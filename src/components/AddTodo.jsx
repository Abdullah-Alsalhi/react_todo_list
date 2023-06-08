import { InputField, TextAreaField, Button } from "./index";

const AddTodo = () => {
	return (
		<div className="block my-12">
			<InputField label={"new Todo"} />
			<TextAreaField label={"new Todo description"} />
			<Button
				title="Create"
				className="my-2 mx-2"
				bgColor="bg-success-500"
				focusBgColor="bg-success-600"
				ActiveBgColor="bg-success-600"
			/>
			<Button
				title="Cancel"
				className="my-2 mx-2"
				bgColor="bg-danger-500"
				focusBgColor="bg-danger-600"
				ActiveBgColor="bg-danger-600"
			/>
		</div>
	);
};
export default AddTodo;
