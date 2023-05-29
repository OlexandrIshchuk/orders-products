import React from 'react';
import { useSelector } from 'react-redux';

const ProductInOrderComponent = () => {
	const { products, orders, selectedOrder } = useSelector(({ store }) => store);

	const filteredProducts = products.filter(product => product.order === selectedOrder);
	const filteredOrder = orders.filter(order => order.id === selectedOrder);

	return (
		<div className="products-in-order">
			<h4 className="p-4">{filteredOrder[0].title}</h4>

			{filteredProducts.map(product => (
				<div key={product.id} className="products-in-order-table">
					<div className="col-lg-1">
						<img src={product.photo} alt="Product"></img>
					</div>
					<div className="col-lg-8 ps-3">
						{product.title}
						<br />
						<span className="serial-number">SN-{product.serialNumber}</span>
					</div>
					<div className="col-lg-2 ps-3">{product.type}</div>
				</div>
			))}
		</div>
	);
};

export default ProductInOrderComponent;
