import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const CounterComponent = () => {
	const [activeSessions, setActiveSessions] = useState(0);

	useEffect(() => {
		const socket = io('http://localhost:3001');

		socket.on('activeSessions', count => {
			setActiveSessions(count);
		});

		return () => {
			socket.disconnect();
		};
	}, []);

	return (
		<div>
			<h1>Active Sessions: {activeSessions}</h1>
		</div>
	);
};

export default CounterComponent;
