import React from 'react';
import OrderComponent from '../../components/OrderComponent';
import './orders.styles.scss';

const Orders = () => {
	return (
		<div className="orders-wrapper">
			<h1 className="mb-5">Orders / 25</h1>
			<OrderComponent />
			<OrderComponent />
			<OrderComponent />
			<OrderComponent />
		</div>
	);
};

export default Orders;
