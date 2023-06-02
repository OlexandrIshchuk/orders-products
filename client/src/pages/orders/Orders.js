import React from 'react';
import { useSelector } from 'react-redux';
import OrderComponent from '../../components/OrderComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import './orders.styles.css';

const Orders = () => {
	const { orders } = useSelector(({ store }) => store);
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('add-order');
	};

	return (
		<>
			<div className="d-flex align-items-center mb-5">
				<div className="add-order me-3">
					<div className="add-order__button" onClick={handleClick}>
						<FontAwesomeIcon icon={faPlus} />
					</div>
				</div>
				<h1>Orders / {orders.length}</h1>
			</div>

			<OrderComponent />
		</>
	);
};

export default Orders;
