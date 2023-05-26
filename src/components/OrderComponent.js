import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const OrderComponent = () => {
	function deleteOrder() {
		console.log('delete');
	}

	return (
		<div className="order-item">
			<div className="row">
				<div className="col-lg-5">
					<span>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
					</span>
				</div>
				<div className="col-lg-2">
					<div className="product-quantity">
						<div className="list-icon-circle">
							<FontAwesomeIcon className="list-icon" icon={faListUl} />
						</div>

						<div>
							<span className="quantity">25</span>
							<br />
							<span className="product">Product</span>
						</div>
					</div>
				</div>
				<div className="col-lg-2 d-flex align-items-center flex-column">
					<span className="time">20 / 05</span>
					<span className="date">20 / 05 / 2023</span>
				</div>
				<div className="col-lg-2 d-flex align-items-center flex-column">
					<span className="price">50 $</span>
					<span className="price-default">2500 UAH</span>
				</div>
				<div className="col-lg-1 d-flex align-items-center">
					<FontAwesomeIcon className="trash-icon" icon={faTrashCan} onClick={deleteOrder} />
				</div>
			</div>
		</div>
	);
};

export default OrderComponent;
