import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://localhost:3001';

const CounterComponent = () => {
	const [activeSessions, setActiveSessions] = useState(0);

	useEffect(() => {
		const socket = socketIOClient(ENDPOINT);

		socket.on('activeSessions', count => {
			setActiveSessions(count);
		});

		return () => {
			socket.disconnect();
		};
	}, []);

	return <div>Active Sessions: {activeSessions}</div>;
};

export default CounterComponent;
