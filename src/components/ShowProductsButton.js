import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { setSelectedOrder } from '../store/ordersSlice';

function ShowProductsButton(props) {
	const dispatch = useDispatch();

	const handleShow = () => {
		dispatch(setSelectedOrder(props.id));
	};

	return (
		<>
			<div
				className="list-icon-circle"
				onClick={() => {
					props.onClick();
					handleShow();
				}}
			>
				<FontAwesomeIcon className="list-icon-circle__icon" icon={faListUl} />
			</div>
		</>
	);
}

export default ShowProductsButton;
