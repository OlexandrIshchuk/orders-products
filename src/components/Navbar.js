import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/Velazquez.jpg';

const Navbar = () => {
	return (
		<div className="left-navbar">
			<div className="left-navbar__picture">
				<img src={avatar} alt="User avatar"></img>
			</div>
			<ul className="left-navbar__list">
				<li className="left-navbar__item">
					<Link to="/" className="left-navbar__link">
						ORDER
					</Link>
				</li>
				<li className="left-navbar__item">
					<Link to="/" className="left-navbar__link">
						GROUP
					</Link>
				</li>
				<li className="left-navbar__item">
					<Link to="products" className="left-navbar__link">
						PRODUCTS
					</Link>
				</li>
				<li className="left-navbar__item">
					<Link to="/" className="left-navbar__link">
						USERS
					</Link>
				</li>
				<li className="left-navbar__item">
					<Link to="/" className="left-navbar__link">
						SETTINGS
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
