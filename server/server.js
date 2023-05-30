const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors = require('cors');

// app.use(
// 	cors({
// 		origin: '*',
// 		methods: ['GET', 'POST']
// 	})
// );

let activeSessions = 0;

io.on('connection', socket => {
	activeSessions++;
	io.emit('activeSessions', activeSessions);

	socket.on('disconnect', () => {
		activeSessions--;
		io.emit('activeSessions', activeSessions);
	});
});

app.get('/ping', (req, res) => {
	res.send('Ta-da!');
});

const port = 3001;
server.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
