import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

export default function ExpenseForm({
	closeModal,
	expenseData,
	setExpenseData,
}) {
	const [date, setDate] = useState("");
	const [location, setLocation] = useState("");
	const [description, setDescription] = useState("");
	const [type, setType] = useState("");
	const [amount, setAmount] = useState("");

	const handleAddFormData = (e) => {
		e.preventDefault();
		const expense = {
			id: Date.now(),
			date,
			location,
			description,
			type,
			amount,
		};
		setExpenseData([...expenseData, expense]);
		console.log("expenseDate: ", expenseData);
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
								value={date}
								className="col-sm-9"
								id="item-date"
								onChange={(e) => setDate(e.target.value)}
								htmlFor="date"
								required
							/>
							<label
								htmlFor="item-location"
								className="col-sm-3 col-form-label"
							>
								Location:
							</label>
							<input
								type="text"
								name="location"
								value={location}
								className="col-sm-9"
								id="item-location"
								onChange={(e) => setLocation(e.target.value)}
								htmlFor="location"
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
								value={description}
								className="col-sm-9"
								id="item-description"
								placeholder="Enter description"
								onChange={(e) => setDescription(e.target.value)}
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
								value={type}
								id="item-purchase-type"
								onChange={(e) => setType(e.target.value)}
								htmlFor="payment type"
								required
							>
								<option>Please Select a Payment Option</option>
								<option value="Credit">Credit</option>
								<option value="Debit">Debit</option>
								<option value="Cash">Cash</option>
								<option value="Cryptocurrency">Cryptocurrency</option>
							</select>
							<br />
							<label htmlFor="item-amount" className="col-sm-3 col-form-label">
								Amount:
							</label>
							<input
								type="number"
								name="amount"
								value={amount}
								className="col-sm-9"
								id="item-amount"
								placeholder="Enter amount"
								onChange={(e) => setAmount(e.target.value)}
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
