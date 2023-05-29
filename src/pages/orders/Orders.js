import React from 'react';
import { useSelector } from 'react-redux';
import OrderComponent from '../../components/OrderComponent';

import './orders.styles.css';

const Orders = () => {
	const { orders } = useSelector(({ store }) => store);

	return (
		<div className="">
			<h1 className="mb-5">Orders / {orders.length}</h1>
			<OrderComponent />
		</div>
	);
};

export default Orders;
