import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import dayjs from "dayjs";

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
			<td id="table-row-data">{dayjs(expense.date).format("MM/DD/YYYY")}</td>
			<td id="table-row-data">{expense.location}</td>
			<td id="table-row-data">{expense.description}</td>
			<td id="table-row-data">{expense.type}</td>
			<td id="table-row-data">${expense.amount}</td>
			<td>
				<Button
					className="delete-button"
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
					<tr className="table-header">
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
