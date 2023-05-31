import React, { useState, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeOrder, removeProduct } from '../store/ordersSlice';

function DeleteOrderModal({ order, products }) {
	const user = useSelector(({ auth }) => auth.user);
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);
	const productIdsToRemove = products.map(product => product.id);

	const handleClose = useCallback(() => setShow(false), []);
	const handleShow = useCallback(() => setShow(true), []);

	const deleteOrder = () => {
		dispatch(removeOrder(order.id));
		dispatch(removeProduct(productIdsToRemove));
		setShow(false);
	};

	return (
		<>
			<FontAwesomeIcon className="order-item__trash" icon={faTrashCan} onClick={handleShow} />

			{user.email !== '' ? (
				<Modal show={show} onHide={handleClose} className="modal">
					<Modal.Header closeButton>
						<Modal.Title>Are you sure you want to delete this order?</Modal.Title>
					</Modal.Header>
					<Modal.Body>{order.title}</Modal.Body>
					<Modal.Footer className="modal-footer">
						<Button variant="light" className="modal-footer__cancel" onClick={handleClose}>
							Cancel
						</Button>
						<Button variant="light" className="modal-footer__delete" onClick={deleteOrder}>
							Delete order
						</Button>
					</Modal.Footer>
				</Modal>
			) : (
				<Modal show={show} onHide={handleClose} className="modal">
					<Modal.Header closeButton>
						<Modal.Title className="text-center">Only registered users can delete an order!</Modal.Title>
					</Modal.Header>
					<Modal.Body className="text-center">
						Please{' '}
						<Link to="login" className="left-navbar__link">
							login
						</Link>{' '}
						or{' '}
						<Link to="register" className="left-navbar__link">
							register
						</Link>{' '}
						to continue.
					</Modal.Body>
				</Modal>
			)}
		</>
	);
}

export default DeleteOrderModal;
