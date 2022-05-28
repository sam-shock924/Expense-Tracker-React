import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import { useState } from "react";

function App() {
	const [modalState, setModalState] = useState(false);
	const [expenseData, setExpenseData] = useState([]);

	return (
		<div className="App">
			<div className="app-title">
				<h1>Expense Tracker</h1>
			</div>
			<div className="container text-center">
				<button
					className="create-expense-button"
					onClick={() => setModalState(!modalState)}
				>
					Create New Expense
				</button>
			</div>
			{modalState && (
				<ExpenseForm
					closeModal={setModalState}
					expenseData={expenseData}
					setExpenseData={setExpenseData}
				/>
			)}
			<ExpenseTable expenseData={expenseData} setExpenseData={setExpenseData} />
		</div>
	);
}

export default App;
