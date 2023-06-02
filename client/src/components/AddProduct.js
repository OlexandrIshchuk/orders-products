import React, { useMemo, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../store/ordersSlice';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const formatCurrentDate = date => {
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');
	const hours = date.getHours().toString().padStart(2, '0');
	const minutes = date.getMinutes().toString().padStart(2, '0');
	const seconds = date.getSeconds().toString().padStart(2, '0');
	return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

function AddProduct() {
	const navigate = useNavigate();
	const { products, orders } = useSelector(({ store }) => store);
	const dispatch = useDispatch();
	const [closeAddProduct, setCloseAddProduct] = useState(false);

	const closeProduct = () => navigate('/');

	const currentDate = new Date();

	const validationSchema = useMemo(
		() =>
			Yup.object({
				title: Yup.string().required('The name is required'),
				serialNumber: Yup.number().required('Serial number is required'),
				notDefaultprice: Yup.number().required('Price is required'),
				defaultPrice: Yup.number().required('Default price is required'),
				type: Yup.string().required('Type is required'),
				guaranteePeriod: Yup.number()
					.required('Guarantee period is required')
					.min(1, 'Guarantee period must be at least 1 month')
					.max(24, 'Guarantee period should not be more than 24 months'),
				guaranteeStart: Yup.string(),
				guaranteeEnd: Yup.string()
			}),
		[]
	);

	const formik = useFormik({
		initialValues: {
			id: '',
			serialNumber: '',
			title: '',
			type: '',
			photo: '',
			guarantee: {
				start: '',
				end: ''
			},
			price: [{ value: '', symbol: '', isDefault: 0 }],
			order: orders.length
		},
		validationSchema,
		onSubmit: values => {
			const formatCurrentDatePlusMonth = date => {
				date.setMonth(date.getMonth() + values.guaranteePeriod);
				return formatCurrentDate(date);
			};
			const guaranteeStart = formatCurrentDate(currentDate);
			const guaranteeEnd = formatCurrentDatePlusMonth(currentDate);

			const product = {
				id: products.length + 1,
				serialNumber: values.serialNumber,
				title: values.title,
				type: values.type,
				photo: 'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
				guarantee: {
					start: guaranteeStart,
					end: guaranteeEnd
				},
				price: [
					{ value: values.notDefaultprice, symbol: 'USD', isDefault: 0 },
					{ value: values.defaultPrice, symbol: 'UAH', isDefault: 1 }
				],
				order: orders.length
			};
			dispatch(addProduct(product));
			formik.resetForm();
			setCloseAddProduct(true);
		}
	});

	return (
		<div className="animate__animated animate__slideInRight">
			<h2 className="text-center">Add product to the order</h2>
			<Form className="add-form" onSubmit={formik.handleSubmit}>
				<Form.Group className="mb-3 mt-3" controlId="title">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter the name of the product"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.title}
						isInvalid={formik.touched.title && !!formik.errors.title}
					/>
					<Form.Control.Feedback type="invalid">{formik.errors.title}</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="serialNumber">
					<Form.Label>Serial number</Form.Label>
					<Form.Control
						type="number"
						placeholder="Enter a serial number"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.serialNumber}
						isInvalid={formik.touched.serialNumber && !!formik.errors.serialNumber}
					/>
					<Form.Control.Feedback type="invalid">{formik.errors.serialNumber}</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="notDefaultprice">
					<Form.Label>Price</Form.Label>
					<Form.Control
						type="number"
						placeholder="Enter the product price"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.notDefaultprice}
						isInvalid={formik.touched.notDefaultprice && !!formik.errors.notDefaultprice}
					/>
					<Form.Control.Feedback type="invalid">{formik.errors.notDefaultprice}</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="defaultPrice">
					<Form.Label>Default price</Form.Label>
					<Form.Control
						type="number"
						placeholder="Enter the product default price"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.defaultPrice}
						isInvalid={formik.touched.defaultPrice && !!formik.errors.defaultPrice}
					/>
					<Form.Control.Feedback type="invalid">{formik.errors.defaultPrice}</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3 mt-3" controlId="type">
					<Form.Label>Type</Form.Label>
					<Form.Control
						as="select"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.type}
						isInvalid={formik.touched.type && !!formik.errors.type}
					>
						<option value="">Select a type</option>
						<option value="Monitors">Monitors</option>
						<option value="Laptops">Laptops</option>
					</Form.Control>
					<Form.Control.Feedback type="invalid">{formik.errors.type}</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="guaranteePeriod">
					<Form.Label>Guarantee period</Form.Label>
					<Form.Control
						type="number"
						placeholder="Enter the product guarantee period (from 1 to 24 months)"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.guaranteePeriod}
						isInvalid={formik.touched.guaranteePeriod && !!formik.errors.guaranteePeriod}
					/>
					<Form.Control.Feedback type="invalid">{formik.errors.guaranteePeriod}</Form.Control.Feedback>
				</Form.Group>

				<div className="d-flex justify-content-between">
					<Button variant="primary" type="submit" className="register__button">
						Add product
					</Button>
					{closeAddProduct ? (
						<Button variant="primary" onClick={closeProduct} className="register__button">
							Finish
						</Button>
					) : (
						''
					)}
				</div>
			</Form>
		</div>
	);
}

export default AddProduct;
