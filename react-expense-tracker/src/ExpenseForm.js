import { Modal, Button } from 'react-bootstrap';


export default function ExpenseForm({closeModal}) {
    return ( 
        <div className="ExpenseForm">
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>New Expense</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form className="ExpenseFormArea"> 
                        <div className="form-group">
                            <label htmlFor="item-date">Date:</label>
                            <input type="date" className="form-inputs" id="item-date" />
                            <br />
                            <label htmlFor="item-description">Expense Description:</label>
                            <input type="text" className="form-inputs" id="item-description" placeholder="Enter description" />
                            <br />
                            <label htmlFor="item-purchase-type">Payment Type:</label>
                            <select className="form-inputs" id="item-purchase-type">
                                <option value="credit">Credit</option>
                                <option value="debit">Debit</option>
                                <option value="cash">Cash</option>
                                <option value="cryptocurrency">Cryptocurrency</option>
                            </select>
                            <br />
                            <label htmlFor="item-amount">Amount:</label>
                            <input type="number" className="form-inputs" id="item-amount" placeholder="Enter amount" />
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={() => closeModal(false)}>Cancel</Button>
                    <Button >Add new expense</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
     );
}

/*form needs: date, description, amount, category*/