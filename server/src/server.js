const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = 3000

app.use(bodyParser.json())

app.post('/register', (req, res) => {
	res.send({
		message: `Hello ${req.body.username}! Your user was registered successfully!`
	})
})

app.listen(port)