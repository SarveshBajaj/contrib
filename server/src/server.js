const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
	res.send("<h1>Hello World!</h1>")
})

app.listen(port)