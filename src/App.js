import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import { useState } from "react";

function App() {
	const title = "Expense Tracker";
	const [modalState, setModalState] = useState(false);
	const [userFormData, setUserFormData] = useState({
		date: "",
		description: "",
		type: "",
		amount: "",
	});

	return (
		<div className="App">
			<div className="app-title">
				<h1>{title}</h1>
			</div>
			<div className="container">
				<button
					className="create-expense-button"
					onClick={() => setModalState(!modalState)}
				>
					Create New Expense
				</button>
			</div>
			{modalState && <ExpenseForm closeModal={setModalState} />}
			<ExpenseTable updateTable={setUserFormData} />
		</div>
	);
}

export default App;
