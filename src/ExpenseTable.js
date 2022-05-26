import Table from "react-bootstrap/Table";

const ExpenseTable = ({ expenseData, setExpenseData }) => {
	const expenseDataRow = expenseData.map((expense) => (
		<tr>
			<td>{expense.date}</td>
			<td>{expense.location}</td>
			<td>{expense.description}</td>
			<td>{expense.type}</td>
			<td>${expense.amount}</td>
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
					</tr>
				</thead>
				<tbody className="expense-table-body">{expenseDataRow}</tbody>
			</Table>
		</div>
	);
};

export default ExpenseTable;
