import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
	const { products, orders } = useSelector(({ store }) => store);

	const [selectedType, setSelectedType] = useState('');

	const handleTypeChange = event => {
		setSelectedType(event.target.value);
	};

	const filteredProducts = selectedType ? products.filter(product => product.type === selectedType) : products;

	return (
		<>
			<div className="row mb-5">
				<div className="col-lg-3">
					<h2>Products / {filteredProducts.length}</h2>
				</div>
				<div className="col-lg-9 d-flex align-items-center">
					<span className="label-type-select">Type:</span>
					<select
						id="productType"
						className="form-select form-select-sm w-25"
						value={selectedType}
						onChange={handleTypeChange}
					>
						<option value="">All</option>
						<option value="Monitors">Monitors</option>
						<option value="Laptops">Laptops</option>
					</select>
				</div>
			</div>

			{filteredProducts.map(product => {
				const defaultPrice = product.price.find(price => price.isDefault === 1);
				const notDefaultPrice = product.price.find(price => price.isDefault === 0);
				const filteredOrder = orders.filter(order => order.id === product.order);
				return (
					<div key={product.id} className="products-table">
						<div className="col-lg-1">
							<img src={product.photo} alt="Product"></img>
						</div>
						<div className="col-lg-3">
							{product.title}
							<br />
							<span className="products-table__serial">SN-{product.serialNumber}</span>
						</div>
						<div className="col-lg-1">{product.type}</div>

						<div className="col-lg-2">
							<span className="products-table__guarantee">start</span>
							<span>{product.guarantee.start.toDateString()}</span>
							<br />
							<span className="products-table__guarantee">end</span>
							<span>{product.guarantee.end.toDateString()}</span>
						</div>

						<div className="col-lg-1">
							{notDefaultPrice ? (
								<span className="not-default-price">
									{notDefaultPrice.value} {notDefaultPrice.symbol}
								</span>
							) : (
								<span className="default-price">
									{defaultPrice.value} {defaultPrice.symbol}
								</span>
							)}
							<br />
							{defaultPrice ? (
								<span className="default-price">
									{defaultPrice.value} {defaultPrice.symbol}
								</span>
							) : (
								<span className="not-default-price">
									{notDefaultPrice.value} {notDefaultPrice.symbol}
								</span>
							)}
						</div>

						<div className="col-lg-4">{filteredOrder[0].title}</div>
					</div>
				);
			})}
		</>
	);
};

export default ProductComponent;
