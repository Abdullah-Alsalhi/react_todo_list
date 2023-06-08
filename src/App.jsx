import "./App.css";

import { Container } from "./components/layout/index";
import { Card, Todo, AddTodo } from "./components/index";

export default function App() {
	return (
		<Container className="container my-12">
			<div className="App flex justify-center items-center h-full">
				<Card className="sm:w-fit md:w-2/3" title={"card title"}>
					<Todo title={"one"} description={"one description"} />
					<AddTodo />
				</Card>
			</div>
		</Container>
	);
}
