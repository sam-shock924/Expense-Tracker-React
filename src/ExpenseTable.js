import Table from "react-bootstrap/Table";

const ExpenseTable = () => {
	return (
		<div className="expense-table">
			<Table striped bordered hover>
				<thead className="thead-dark">
					<tr>
						<th>Date</th>
						<th>Description</th>
						<th>Payment Type</th>
						<th>Amount</th>
						<th></th>
					</tr>
				</thead>
				<tbody className="expense-table-body">
					<tr>
						<td>01/01/2020</td>
						<td>Lunch</td>
						<td>Cash</td>
						<td>$10.00</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default ExpenseTable;
