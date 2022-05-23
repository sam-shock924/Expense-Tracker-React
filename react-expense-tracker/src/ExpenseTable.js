import Table from "react-bootstrap/Table";
import ExpenseForm from "./ExpenseForm";

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
						<td>04/20/2022</td>
						<td>Blow and hookers</td>
						<td>Cash</td>
						<td>$69</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default ExpenseTable;
