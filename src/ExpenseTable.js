import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

const ExpenseTable = ({ expenseData, setExpenseData }) => {
	const handleDelete = (id) => {
		const newExpenseData = [...expenseData];
		const expenseDataList = expenseData.findIndex(
			(expense) => expense.id === id
		);
		newExpenseData.splice(expenseDataList, 1);
		setExpenseData(newExpenseData);
	};

	const expenseDataRow = expenseData.map((expense) => (
		<tr key={expense.id}>
			<td>{expense.date}</td>
			<td>{expense.location}</td>
			<td>{expense.description}</td>
			<td>{expense.type}</td>
			<td>${expense.amount}</td>
			<td>
				<Button
					variant="outline-danger"
					onClick={() => handleDelete(expense.id)}
				>
					Delete
				</Button>
			</td>
		</tr>
	));

	return (
		<div className="expense-table">
			<Table striped bordered hover>
				<thead className="thead-dark">
					<tr>
						<th>Date</th>
						<th>Location</th>
						<th>Description</th>
						<th>Payment Type</th>
						<th>Amount</th>
						<th>...</th>
					</tr>
				</thead>
				<tbody className="expense-table-body">{expenseDataRow}</tbody>
			</Table>
		</div>
	);
};

export default ExpenseTable;
