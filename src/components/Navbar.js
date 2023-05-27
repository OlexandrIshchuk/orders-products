import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/Velazquez.jpg';

const Navbar = () => {
	return (
		<div className="left-navbar">
			<div className="user-picture">
				<img src={avatar} alt="User avatar"></img>
			</div>
			<ul>
				<li>
					<Link to="/">ORDER</Link>
				</li>
				<li>
					<Link to="/">GROUP</Link>
				</li>
				<li>
					<Link to="products">PRODUCTS</Link>
				</li>
				<li>
					<Link to="/">USERS</Link>
				</li>
				<li>
					<Link to="/">SETTINGS</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
