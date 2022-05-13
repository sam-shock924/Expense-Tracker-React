import { Modal, Button } from 'react-bootstrap';


export default function ExpenseForm({closeModal}) {
    // const modalState = props.changeModalState;
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
                    <Button onClick={() => closeModal(false)}>Close</Button>
                    <Button >Submit</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
     );
}