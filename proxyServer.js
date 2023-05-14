const http = require('http')
const httpProxy = require('http-proxy')

// Create a proxy server
const proxy = httpProxy.createProxyServer({})

// Set up the HTTP server
const server = http.createServer((req, res) => {
	// Forward requests to the target
	proxy.web(req, res, { target: 'http://localhost:1337' })
})

// Listen on port 8000
server.listen(8000, () => {
	console.log('Proxy server listening on port 8000')
})
