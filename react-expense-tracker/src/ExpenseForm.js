import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
// import { createPortal } from 'react-dom';

export default function ExpenseForm({ closeModal }) {
    const [userDate, setDate] = useState('');
    const [userDescription, setDescription] = useState('');
    const [userType, setType] = useState('');
    const [userAmount, setAmount] = useState('');

    const changeDateHandler = (e) => {
        setDate(e.target.value);
    }

    const changeDescriptionHandler = (e) => {
        setDescription(e.target.value);
    }

    const changeTypeHandler = (e) => {
        setType(e.target.value);
    }
    
    const changeAmountHandler = (e) => {
        setAmount(e.target.value);
    }

    const submitForm = (e) => {
        e.preventDefault();
        setDate('');
        setDescription('');
        setType('');
        setAmount('');
    }
    
    console.log(userDate, userDescription, userType, userAmount)

        return (
            <div className="ExpenseForm">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>New Expense</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="ExpenseFormArea" onSubmit={submitForm}>
                            <div className="form-group">
                                <label htmlFor="item-date">Date:</label>
                                <input type="date" className="form-inputs" id="item-date" onChange={changeDateHandler} value={userDate} required/>
                                <br />
                                <label htmlFor="item-description">Expense Description:</label>
                                <input type="text" className="form-inputs" id="item-description" placeholder="Enter description" onChange={changeDescriptionHandler} value={userDescription} required/>
                                <br />
                                <label htmlFor="item-purchase-type">Payment Type:</label>
                                <select className="form-inputs" id="item-purchase-type" onChange={changeTypeHandler} value={userType} required>
                                    <option>Please Select a Payment Option</option>
                                    <option value="credit">Credit</option>
                                    <option value="debit">Debit</option>
                                    <option value="cash">Cash</option>
                                    <option value="cryptocurrency">Cryptocurrency</option>
                                </select>
                                <br />
                                <label htmlFor="item-amount">Amount:</label>
                                <input type="number" className="form-inputs" id="item-amount" placeholder="Enter amount" onChange={changeAmountHandler} value={userAmount} required/>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => closeModal(false)}>Cancel</Button>
                        <Button type="submit" >Add new expense</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        );
}