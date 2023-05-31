import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import avatar from '../assets/Velazquez.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector(({ auth }) => auth.user);

	function handleClick() {
		navigate('/login');
		dispatch(removeUser());
	}

	return (
		<div className="left-navbar">
			<div className="left-navbar__picture">
				<img src={avatar} alt="User avatar"></img>
			</div>
			<ul className="left-navbar__list">
				<li className="left-navbar__item">
					<NavLink exact to="/" className="left-navbar__link" activeClassName="active-link">
						ORDER
					</NavLink>
				</li>
				<li className="left-navbar__item">
					<NavLink exact to="/group" className="left-navbar__link" activeClassName="active-link">
						GROUP
					</NavLink>
				</li>
				<li className="left-navbar__item">
					<NavLink to="/products" className="left-navbar__link" activeClassName="active-link">
						PRODUCTS
					</NavLink>
				</li>
				<li className="left-navbar__item">
					<NavLink exact to="/users" className="left-navbar__link" activeClassName="active-link">
						USERS
					</NavLink>
				</li>
				{user.email !== '' ? (
					<li className="left-navbar__item">
						<NavLink exact to="/settings" className="left-navbar__link">
							SETTINGS
						</NavLink>
					</li>
				) : (
					''
				)}
				{user.email === '' ? (
					<li className="left-navbar__item">
						<NavLink to="/login" className="left-navbar__link" activeClassName="active-link">
							LOGIN
						</NavLink>
					</li>
				) : (
					<li className="left-navbar__item">
						<Link className="left-navbar__link" onClick={handleClick}>
							LOGOUT
						</Link>
					</li>
				)}
			</ul>
		</div>
	);
};

export default Navbar;
