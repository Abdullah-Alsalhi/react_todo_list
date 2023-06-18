import { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

import { Container } from "./components/layout/index";
import { Card, Modal, Todo, AddTodo, Button } from "./components/index";
import EditTodo from "./components/EditTodo";
import DeleteConfirmModel from "./components/DeleteConfirmModel";

const ALL_TODO = [
	{
		id: uuidv4(),
		title: "Complete homework",
		description: "Finish the assigned homework before the deadline",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Go grocery shopping",
		description: "Buy groceries for the week",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Call a friend",
		description: "Catch up with a friend over the phone",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Clean the house",
		description: "Tidy up the living space and do some cleaning",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Prepare dinner",
		description: "Plan and cook a delicious meal for dinner",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Read a book",
		description: "Spend some time reading a book of your choice",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Go for a run",
		description: "Get some exercise by going for a jog or run",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Attend a meeting",
		description: "Join an important meeting at work or school",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Watch a movie",
		description: "Relax and enjoy a movie of your choice",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Take a nap",
		description: "Take a short nap to recharge and relax",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Write a blog post",
		description: "Share your thoughts and insights through a blog post",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Learn a new skill",
		description: "Dedicate time to learn something new and valuable",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Go out for a walk",
		description: "Take a leisurely walk outdoors and enjoy nature",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Do yoga or meditation",
		description: "Practice mindfulness and improve mental well-being",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Organize your workspace",
		description: "Declutter and organize your desk or workspace",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Volunteer for a cause",
		description: "Contribute your time to a charitable organization",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Start a new project",
		description: "Begin a creative or personal project that interests you",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Visit a museum or art gallery",
		description: "Explore and appreciate art and culture",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Plan a weekend getaway",
		description: "Research and plan for a short vacation or trip",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Write a letter to a loved one",
		description: "Express your feelings and send a heartfelt letter",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Try a new recipe",
		description: "Cook and savor a delicious recipe you've never tried before",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Do a puzzle",
		description: "Challenge yourself with a puzzle or brain teaser",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Take a photography walk",
		description: "Capture interesting moments and scenes with your camera",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Listen to a podcast",
		description: "Explore a podcast on a topic that interests you",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Create a playlist",
		description: "Curate a collection of your favorite songs into a playlist",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Explore a new hiking trail",
		description: "Discover a scenic hiking trail and enjoy nature",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Play a musical instrument",
		description: "Practice playing a musical instrument you enjoy",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Take a dance class",
		description: "Learn some new dance moves or join a dance class",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Write in a journal",
		description: "Reflect on your day or write down your thoughts",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Visit a local market",
		description: "Explore a farmers market or flea market in your area",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Try a new restaurant",
		description: "Dine out and experience a new culinary delight",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Go for a bike ride",
		description: "Enjoy a bike ride and explore your surroundings",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Attend a live concert",
		description: "Experience the energy of a live music performance",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Have a picnic in the park",
		description: "Pack some food and enjoy a picnic outdoors",
		isDone: false,
	},
	{
		id: uuidv4(),
		title: "Learn a new language",
		description: "Start learning a foreign language of your choice",
		isDone: false,
	},
];

export default function App() {
	const [todos, setTodos] = useState(ALL_TODO);
	const [showEditModel, setShowEditModel] = useState(false);
	const [showDeleteModel, setShowDeleteModel] = useState(false);
	const [details, setDetails] = useState({
		id: "",
		title: "",
		description: "",
		isDone: false,
	});

	const handleEdit = (id) => {
		const todo = todos.find((todo) => todo.id === id);
		setDetails(() => todo);
		setShowEditModel((prev) => !prev);
	};

	const handleEditTodoChange = () => {
		const EditedTodos = todos.map((todo) => {
			if (todo.id === details.id) {
				return details;
			}
			return todo;
		});

		setDetails(() => ({
			id: "",
			title: "",
			description: "",
			isDone: false,
		}));
		localStorage.setItem("todos", JSON.stringify(EditedTodos));
		setTodos(EditedTodos);
		setShowEditModel((prev) => !prev);
	};

	const handleDelete = (id) => {
		setDetails((prev) => ({ ...prev, id: id }));
		setShowDeleteModel(true);
	};
	const handleSetConfirmDelete = (id) => {
		const storedTodos = JSON.parse(localStorage.getItem("todos"));
		const newTodos = storedTodos.filter((todo) => todo.id != id);
		setTodos(newTodos);
		localStorage.setItem("todos", JSON.stringify(newTodos));
		setDetails((prev) => ({ ...prev, id: "" }));
	};
	const handleIsDone = (id) => {
		const EditedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					isDone: !todo.isDone,
				};
			}
			return todo;
		});
		localStorage.setItem("todos", JSON.stringify(EditedTodos));
		setTodos(EditedTodos);
	};

	const handleTitleChange = (value) =>
		setDetails((prev) => ({ ...prev, title: value }));

	const handleDescriptionChange = (value) =>
		setDetails((prev) => ({ ...prev, description: value }));

	const handleTodoStatusChange = (value) =>
		setDetails((prev) => ({ ...prev, isDone: value }));

	const handleAddNewTodo = () => {
		const newTodo = {
			id: uuidv4(),
			title: details.title,
			description: details.description,
			isDone: false,
		};
		setTodos((prev) => [...prev, newTodo]);
		localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
		setDetails({ id: "", title: "", description: "", isDone: false });
	};

	const handleDoneTodos = () => {
		const storedTodos = JSON.parse(localStorage.getItem("todos"));
		const doneTodos = storedTodos.filter((doneTodo) => doneTodo.isDone);
		setTodos(doneTodos);
	};

	const handleInprogressTodos = () => {
		const storedTodos = JSON.parse(localStorage.getItem("todos"));
		const doneTodos = storedTodos.filter((doneTodo) => !doneTodo.isDone);
		setTodos(doneTodos);
	};

	const handleAllTodos = () => {
		const storedTodos = JSON.parse(localStorage.getItem("todos"));
		setTodos(storedTodos);
	};

	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem("todos"))
			? JSON.parse(localStorage.getItem("todos"))
			: [];
		if (storedTodos.length > 0) setTodos(storedTodos);
	}, []);

	return (
		<Container className="container mx-auto mt-12">
			<div className="flex justify-center items-center">
				<Card className="sm:w-fit md:w-2/3 shadow-2xl" title={"Todos!"}>
					<Button
						title="All"
						bgColor="bg-orange-500"
						className="mx-2 font-bold"
						onClick={handleAllTodos}
					/>
					<Button
						title="In progress"
						bgColor="bg-warning-500"
						className="mx-2 font-bold"
						onClick={handleInprogressTodos}
					/>
					<Button
						title="Done"
						bgColor="bg-green-500"
						className="mx-2 font-bold"
						onClick={handleDoneTodos}
					/>
					{todos.map((todo) => (
						<Todo
							className="hover:brightness-110"
							key={todo.id}
							todo={todo}
							handleDelete={() => handleDelete(todo.id)}
							handleEdit={() => handleEdit(todo.id)}
							handleIsDone={() => handleIsDone(todo.id)}
						/>
					))}
					<AddTodo
						handleAddNewTodo={handleAddNewTodo}
						handleChangeNewTodo={{ handleTitleChange, handleDescriptionChange }}
						todo={showEditModel ? { title: "", description: "" } : details}
					/>
				</Card>
			</div>
			<Modal show={showEditModel}>
				<div className="sm:w-fit md:w-2/3 relative bg-white p-2 rounded-lg text-gray-950">
					<Button
						className="absolute top-2 right-2"
						bgColor="bg-danger-900"
						title="close"
						onClick={() => setShowEditModel(false)}
					/>
					<EditTodo
						todo={showEditModel ? details : { title: "", description: "" }}
						handleEditTodoChange={handleEditTodoChange}
						handleChangeNewTodo={{
							handleTitleChange,
							handleDescriptionChange,
							handleTodoStatusChange,
						}}
					/>
				</div>
			</Modal>
			<DeleteConfirmModel
				open={showDeleteModel}
				setOpen={setShowDeleteModel}
				handleSetConfirmDelete={handleSetConfirmDelete}
				id={details.id}
			/>
		</Container>
	);
}
