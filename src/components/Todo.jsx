import { Button } from "./index";
import { MDBIcon } from "mdb-react-ui-kit";
import { AiFillDelete } from "react-icons/ai";
const Todo = ({
	// eslint-disable-next-line react/prop-types
	title = null,
	// eslint-disable-next-line react/prop-types
	description = "",
	// eslint-disable-next-line react/prop-types
	className = "",
	// eslint-disable-next-line react/prop-types
	status = false,
	...props
}) => (
	<div
		className={`my-3 block rounded-lg bg-slate-800 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ${className}`}
		{...props}
	>
		{title && (
			<div className="flex justify-between items-center">
				<div className="">
					<h5 className="text-start mb-2 text-xl font-medium leading-tight text-white">
						{title}
					</h5>
					<h6 className="text-start mb-2 text-xl font-medium leading-tight text-white">
						{description}
					</h6>
				</div>
				<div className="justify-self-end">
					<Button
						className={`mx-2 w-1/6 ${
							status ? "bg-success-600" : "bg-success-400"
						}`}
						title="status"
						hoverBgColor="bg-success-900"
						ActiveBgColor="bg-success-900"
						focusBgColor="bg-success-900"
					>
						<i className="fas fa-calendar-check"></i>
					</Button>
					<Button
						className="mx-2 w-1/6 bg-warning-600"
						title="update"
						hoverBgColor="bg-warning-700"
						ActiveBgColor="bg-warning-700"
						focusBgColor="bg-warning-700"
					>
						<MDBIcon fab icon="mdb" />
					</Button>
					<Button
						className="mx-2 w-1/6 bg-danger-600"
						title="delete"
						hoverBgColor="bg-danger-700"
						ActiveBgColor="bg-danger-700"
						focusBgColor="bg-danger-700"
					></Button>
				</div>
			</div>
		)}
	</div>
);

export default Todo;
