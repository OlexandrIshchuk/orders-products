import React, { useState } from 'react';

const ProductComponent = () => {
	const products = [
		{
			id: 1,
			serialNumber: 1234,
			title: 'Dell U2311H Black',
			type: 'Monitors',
			photo: 'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
			guarantee: {
				start: new Date('2022-01-01'),
				end: new Date('2023-01-01')
			},
			price: [
				{ value: 100, symbol: 'USD', isDefault: 0 },
				{ value: 2600, symbol: 'UAH', isDefault: 1 }
			],
			order: 'Ut enim ad minim veniam, quis nostrud exercitation'
		},
		{
			id: 2,
			serialNumber: 1234,
			title: 'Dell U2311H Black',
			type: 'Monitors',
			photo: 'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
			guarantee: {
				start: new Date('2022-01-01'),
				end: new Date('2023-01-01')
			},
			price: [
				{ value: 100, symbol: 'USD', isDefault: 0 },
				{ value: 2600, symbol: 'UAH', isDefault: 1 }
			],
			order: 'Ut enim ad minim veniam, quis nostrud exercitation'
		},
		{
			id: 3,
			serialNumber: 1234,
			title: 'Dell U2311H Black',
			type: 'Monitors',
			photo: 'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
			guarantee: {
				start: new Date('2022-01-01'),
				end: new Date('2023-01-01')
			},
			price: [
				{ value: 100, symbol: 'USD', isDefault: 0 },
				{ value: 2600, symbol: 'UAH', isDefault: 1 }
			],
			order: 'Ut enim ad minim veniam, quis nostrud exercitation Ut enim ad minim veniam, quis nostrud exercitationUt enim ad minim veniam, quis nostrud exercitation'
		},
		{
			id: 4,
			serialNumber: 123456,
			title: 'HP Pavilion 15-eh1107ua (4A7N3EA) Silver',
			type: 'Laptops',
			photo: 'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
			guarantee: {
				start: new Date('2022-01-01'),
				end: new Date('2023-01-01')
			},
			price: [
				{ value: 100, symbol: 'USD', isDefault: 0 },
				{ value: 2600, symbol: 'UAH', isDefault: 1 }
			],
			order: 'Ut enim ad minim veniam, quis nostrud exercitation'
		}
	];

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
				return (
					<div key={product.id} className="products-table">
						<div className="col-lg-1">
							<img src={product.photo} alt="Product"></img>
						</div>
						<div className="col-lg-3">
							{product.title}
							<br />
							<span className="serial-number">SN-{product.serialNumber}</span>
						</div>
						<div className="col-lg-1">{product.type}</div>
						<div className="col-lg-2">
							<span className="start-end">start</span>
							<span>{product.guarantee.start.toDateString()}</span>
							<br />
							<span className="start-end">end</span>
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

						<div className="col-lg-4">{product.order}</div>
					</div>
				);
			})}
		</>
	);
};

export default ProductComponent;
