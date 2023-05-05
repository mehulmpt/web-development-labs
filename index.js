import express from 'express'
import fs from 'fs'
const app = express()

app.listen(1337, () => {
	console.log('Server running on port 1337')
})
