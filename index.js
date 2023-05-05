import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()
app.use(cookieParser())

// Your code here

app.listen(1337, () => {
	console.log('Server is listening at port 1337')
})
