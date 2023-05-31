import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo192.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import CounterComponent from './CounterComponent';
import moment from 'moment';
import 'moment/locale/uk';

const TopMenu = () => {
	const [currentTime, setCurrentTime] = useState(moment().format('LT'));
	const [currentDay, setCurrentday] = useState(moment().format('ll'));

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(moment().format('LT'));
			setCurrentday(moment().format('ll'));
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className="top-menu">
			<Link to="/" className="top-menu__link">
				<img className="top-menu__logo" src={logo} alt="Logo"></img>
				<span>INVENTORY</span>
			</Link>
			<div>
				Today
				<br />
				<span>{currentDay}</span>
				<FontAwesomeIcon className="top-menu__icon ms-3 me-1" icon={faClock} />
				<span>{currentTime}</span>
				<br />
				{/* <CounterComponent /> */}
			</div>
		</div>
	);
};

export default TopMenu;
