import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

export default function ExpenseForm({ closeModal, updateTable }) {
	/* PUSH TO APP.JS
	const [userFormData, setUserFormData] = useState({
		date: "",
		description: "",
		type: "",
		amount: ""
	});
	*/

	const handleAddFormData = (e) => {
		e.preventDefault();
		const formDataName = e.target.getAttribute("name");
		const formDataValue = e.target.value;
		const newFormData = { ...userFormData };
		newFormData[formDataName] = formDataValue;
		setUserFormData(newFormData);
		console.log(newFormData);
	};

	return (
		<div className="ExpenseForm">
			<Modal.Dialog>
				<form className="ExpenseFormArea" onSubmit={handleAddFormData}>
					<Modal.Header>
						<Modal.Title>New Expense</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className="form-group">
							<label htmlFor="item-date" className="col-sm-3 col-form-label">
								Date:
							</label>
							<input
								type="date"
								name="date"
								className="col-sm-9"
								id="item-date"
								onChange={handleAddFormData}
								htmlFor="date"
								required
							/>
							<br />
							<label
								htmlFor="item-description"
								className="col-sm-3 col-form-label"
							>
								Expense Description:
							</label>
							<input
								type="text"
								name="description"
								className="col-sm-9"
								id="item-description"
								placeholder="Enter description"
								onChange={handleAddFormData}
								htmlFor="description"
								required
							/>
							<br />
							<label
								htmlFor="item-purchase-type"
								className="col-sm-3 col-form-label"
							>
								Payment Type:
							</label>
							<select
								className="col-sm-9"
								name="type"
								id="item-purchase-type"
								onChange={handleAddFormData}
								htmlFor="payment type"
								required
							>
								<option>Please Select a Payment Option</option>
								<option value="credit">Credit</option>
								<option value="debit">Debit</option>
								<option value="cash">Cash</option>
								<option value="cryptocurrency">Cryptocurrency</option>
							</select>
							<br />
							<label htmlFor="item-amount" className="col-sm-3 col-form-label">
								Amount:
							</label>
							<input
								type="number"
								name="amount"
								className="col-sm-9"
								id="item-amount"
								placeholder="Enter amount"
								onChange={handleAddFormData}
								htmlFor="amount"
								required
							/>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={() => closeModal(false)}>Cancel</Button>
						<Button type="submit">Add new expense</Button>
					</Modal.Footer>
				</form>
			</Modal.Dialog>
		</div>
	);
}
