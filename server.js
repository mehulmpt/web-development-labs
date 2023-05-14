const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

// Your Node.js server code goes here

server.listen(3000, () => {
	console.log('Server listening on port 3000')
})
