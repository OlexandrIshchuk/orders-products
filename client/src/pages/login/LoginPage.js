import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { setUser } from '../../store/userSlice';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';
import './login.styles.css';

const validationSchema = Yup.object({
	email: Yup.string().email().required('Email is required'),
	password: Yup.string().required('Password is required').min(6, 'Password is too short - should be 6 chars minimum')
});

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [errorMessage, setErrorMessage] = useState(false);
	const [show, setShow] = useState(true);
	const user = JSON.parse(localStorage.getItem('user'));

	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema,
		onSubmit: values => {
			if (user && user.email === values.email && user.password === values.password) {
				dispatch(setUser(values));
				navigate('/');
			} else {
				setErrorMessage(true);
			}
		}
	});

	return (
		<div className="animate__animated animate__fadeIn">
			<h1 className="text-center mb-5">Login</h1>

			<div className="login-wrapper mx-auto">
				<Form className="" onSubmit={formik.handleSubmit}>
					<div className="login">
						{errorMessage ? (
							show ? (
								<Alert variant="danger" onClose={() => setShow(false)} dismissible>
									<Alert.Heading>No such user found in the system!</Alert.Heading>
									<p>Maybe you entered the wrong e-mail and password or you are not registered</p>
								</Alert>
							) : (
								''
							)
						) : (
							''
						)}
						<Form.Group className="mb-3 mt-3" controlId="email">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter your email"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.email}
								isInvalid={formik.touched.email && !!formik.errors.email}
							/>
							<Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
						</Form.Group>
						<Form.Group className="mb-3" controlId="password">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Enter your password"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.password}
								isInvalid={formik.touched.password && !!formik.errors.password}
							/>
							<Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
						</Form.Group>

						<div className="d-flex justify-content-center mt-3">
							<span>
								If you are not registered, please{' '}
								<Link className="register-link" to="/register">
									register
								</Link>
							</span>
						</div>

						<Button className="login-button" variant="primary" type="submit">
							Login
						</Button>
					</div>
				</Form>
			</div>
		</div>
	);
};

export default Login;
