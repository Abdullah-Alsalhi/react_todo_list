import "./App.css";

import { Container } from "./components/layout/index";
import { Card, Todo, AddTodo } from "./components/index";

export default function App() {
	return (
		<Container className="container mt-12">
			<div className="App flex justify-center items-center h-full">
				<Card className="sm:w-fit md:w-2/3" title={"Todos!"}>
					<Todo
						title={"Drink Coffee"}
						description={"Starting my day with a coffee"}
					/>
					<AddTodo />
				</Card>
			</div>
		</Container>
	);
}
