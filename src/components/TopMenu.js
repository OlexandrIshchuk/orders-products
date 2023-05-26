import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo192.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const TopMenu = () => {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className="top-menu">
			<Link to="/">
				<img src={logo} alt="Logo"></img>
				<span>INVENTORY</span>
			</Link>
			<div>
				Today
				<br />
				<span>{currentTime.toLocaleDateString()}</span>
				<FontAwesomeIcon className="icon ms-3 me-1" icon={faClock} />
				<span>{currentTime.toLocaleTimeString()}</span>
			</div>
		</div>
	);
};

export default TopMenu;
