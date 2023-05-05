import express from 'express'

const app = express()
const PORT = 1337

app.use(express.json())

// Implement your code here

app.listen(PORT, () => console.log('Server started on port', PORT))
