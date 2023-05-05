import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())

app.listen(1337, () => {
	console.log('Server running on port 1337')
})

// register and login routes go here

// protected route go here
