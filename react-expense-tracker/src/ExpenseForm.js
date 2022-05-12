import { Modal, Button } from 'react-bootstrap';


export default function ExpenseForm(props) {
    const modalState = props.modalState;
    return ( 
        <div className="ExpenseForm">
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={() => modalState(false)}>Close</Button>
                    <Button >Submit</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
     );
}