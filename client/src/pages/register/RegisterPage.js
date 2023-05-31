import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './register.styles.css';

function Register() {
	const navigate = useNavigate();

	const validationSchema = useMemo(
		() =>
			Yup.object({
				name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Name is required'),
				email: Yup.string().email('Invalid email').required('Email is required'),
				password: Yup.string()
					.required('Password is required')
					.min(6, 'Password is too short - should be 6 chars minimum'),
				confirmPassword: Yup.string()
					.oneOf([Yup.ref('password'), null], 'Passwords must match')
					.required('Confirm password is required')
			}),
		[]
	);

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: ''
		},
		validationSchema,
		onSubmit: values => {
			localStorage.setItem('user', JSON.stringify(values));
			navigate('/login');
		}
	});

	const { handleSubmit, handleChange, handleBlur, values, errors, touched } = formik;

	return (
		<div className="animate__animated animate__fadeIn">
			<h1 className="text-center mb-5">Register</h1>
			<div className="register-wrapper mx-auto">
				<Form className="" onSubmit={handleSubmit}>
					<div className="register">
						<Form.Group className="mb-3 mt-3" controlId="name">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter your name"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.name}
								isInvalid={touched.name && !!errors.name}
							/>
							{errors.name && <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>}
						</Form.Group>

						<Form.Group className="mb-3" controlId="email">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter your email"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
								isInvalid={touched.email && !!errors.email}
							/>
							{errors.email && (
								<Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
							)}
						</Form.Group>

						<Form.Group className="mb-3" controlId="password">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Enter your password"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
								isInvalid={touched.password && !!errors.password}
							/>
							{errors.password && (
								<Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
							)}
						</Form.Group>

						<Form.Group className="mb-3" controlId="confirmPassword">
							<Form.Label>Confirm password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Confirm password"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.confirmPassword}
								isInvalid={touched.confirmPassword && !!errors.confirmPassword}
							/>
							{errors.confirmPassword && (
								<Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
							)}
						</Form.Group>

						<Button className="register__button" variant="primary" type="submit">
							Register
						</Button>
					</div>
				</Form>
			</div>
		</div>
	);
}

export default Register;
