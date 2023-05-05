import express from 'express'

const app = express()

app.use(express.json())

app.listen(1337, () => {
	console.log('Server running on port 1337')
})
