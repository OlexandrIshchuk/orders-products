import React, { useMemo, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../store/ordersSlice';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AddProduct from './AddProduct';

function AddOrder() {
	const dispatch = useDispatch();
	const { orders } = useSelector(({ store }) => store);
	const [addProduct, setAddProduct] = useState(false);
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
	const day = currentDate.getDate().toString().padStart(2, '0');
	const hours = currentDate.getHours().toString().padStart(2, '0');
	const minutes = currentDate.getMinutes().toString().padStart(2, '0');
	const seconds = currentDate.getSeconds().toString().padStart(2, '0');

	const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

	const validationSchema = useMemo(
		() =>
			Yup.object({
				title: Yup.string().required('The name is required')
			}),
		[]
	);

	const formik = useFormik({
		initialValues: {
			id: orders.length + 1,
			title: '',
			date: formattedDate
		},
		validationSchema,
		onSubmit: values => {
			dispatch(addOrder(values));
			formik.resetForm();
			setAddProduct(true);
		}
	});

	return (
		<>
			{!addProduct ? <h2 className="text-center">Add Order</h2> : ''}
			{!addProduct ? (
				<Form className="add-form" onSubmit={formik.handleSubmit}>
					<Form.Group className="mb-3 mt-3" controlId="title">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter the name of the order"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.title}
							isInvalid={formik.touched.title && !!formik.errors.title}
						/>
						<Form.Control.Feedback type="invalid">{formik.errors.title}</Form.Control.Feedback>
					</Form.Group>

					<Button variant="primary" className="register__button" type="submit">
						Add order
					</Button>
				</Form>
			) : (
				<AddProduct />
			)}
		</>
	);
}

export default AddOrder;
