const express = require('express')
const app = express()
app.use(express.json())

// Add your middleware and route handling here

const port = 3000
app.listen(port, () => {
	console.log(`Server started on port ${port}`)
})
