import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { removeOrder, removeProduct } from '../store/ordersSlice';

function DeleteOrderModal({ data }) {
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// const removedProducts =

	const deleteOrder = () => {
		dispatch(removeOrder(data.id));
		dispatch(removeProduct(data.id));
		setShow(false);
	};

	return (
		<>
			<FontAwesomeIcon className="order-item__trash" icon={faTrashCan} onClick={handleShow} />

			<Modal show={show} onHide={handleClose} className="modal">
				<Modal.Header closeButton>
					<Modal.Title>Are you sure you want to delete this order?</Modal.Title>
				</Modal.Header>
				<Modal.Body>{data.title}</Modal.Body>
				<Modal.Footer className="modal-footer">
					<Button variant="light" className="modal-footer__cancel" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="light" className="modal-footer__delete" onClick={deleteOrder}>
						Delete order
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default DeleteOrderModal;
