import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import DeleteOrderModal from '../components/DeleteOrderModal';
import ShowProductsButton from './ShowProductsButton';
import ProductInOrderComponent from './ProductInOrderComponent';

const OrderComponent = () => {
	const { orders, products, selectedOrder } = useSelector(({ store }) => store);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className="d-flex">
			<div className={!show ? 'w-100' : 'orders-wrapper'}>
				{orders.map(order => {
					const filteredProducts = products.filter(product => product.order === order.id);

					let totalPriceUAH = 0;
					let totalPriceUSD = 0;

					for (const product of filteredProducts) {
						for (const price of product.price) {
							if (price.isDefault === 1) {
								totalPriceUAH += price.value;
							} else {
								totalPriceUSD += price.value;
							}
						}
					}

					return (
						<div key={order.id} className="order-item">
							<div className="row">
								{!show && (
									<div className="col-lg-5">
										<span>{order.title}</span>
									</div>
								)}
								<div className={!show ? 'col-lg-2' : 'col'}>
									<div className="product-quantity">
										<ShowProductsButton id={order.id} onClick={handleShow} />

										<div>
											<span className="product-quantity__number">{filteredProducts.length}</span>
											<br />
											<span className="product-quantity__text">Product</span>
										</div>
									</div>
								</div>
								<div
									className={
										!show
											? 'col-lg-2 d-flex align-items-center flex-column'
											: 'col d-flex align-items-center flex-column'
									}
								>
									<span className="order-item__time">20 / 05</span>
									<span className="order-item__date">20 / 05 / 2023</span>
								</div>
								{!show && (
									<div className="col-lg-2 d-flex align-items-center flex-column">
										<span className="order-item__price">{totalPriceUSD} $</span>
										<span className="order-item__default">{totalPriceUAH} UAH</span>
									</div>
								)}
								{!show ? (
									<div className="col-lg-1 d-flex align-items-center">
										<DeleteOrderModal data={order} />
									</div>
								) : order.id === selectedOrder ? (
									<div className="col-lg-1">
										<div className="order-item__chevron">
											<FontAwesomeIcon className="order-item__icon" icon={faChevronRight} />
										</div>
									</div>
								) : (
									<div className="col-lg-1"></div>
								)}
							</div>
						</div>
					);
				})}
			</div>
			{show && (
				<div className="ms-3 position-relative">
					<ProductInOrderComponent />
					<div className="close-products-button" onClick={handleClose}>
						<FontAwesomeIcon className="list-icon" icon={faXmark} />
					</div>
				</div>
			)}
		</div>
	);
};

export default OrderComponent;
