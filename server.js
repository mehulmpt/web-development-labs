const express = require('express')
const http = require('http')
const { Server } = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

// Server-side JavaScript code goes here

server.listen(3000, () => {
	console.log('Server is listening on *:3000')
})
