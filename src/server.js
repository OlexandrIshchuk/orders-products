const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors = require('cors');

app.use(
	cors({
		origin: '*',
		methods: ['GET', 'POST']
	})
);

let activeSessions = 0; // Counter variable for active sessions

io.on('connection', socket => {
	activeSessions++; // Increment the counter on new connection
	io.emit('activeSessions', activeSessions); // Emit the updated count to all clients

	socket.on('disconnect', () => {
		activeSessions--; // Decrement the counter on disconnection
		io.emit('activeSessions', activeSessions); // Emit the updated count to all clients
	});
});

app.get('/ping', (req, res) => {
	res.send('Ta-da!');
});

const port = 3001; // Choose any available port for your server
server.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
