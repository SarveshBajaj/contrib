const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {sequelize} = require('./models')
const {User} = require('./models')

const app = express()

const port = 3000

app.use(bodyParser.json())
app.use(cors())

/* Save the user instance to the database on hitting the register endpoint*/
app.post('/register', async function(req, res) {
	console.log(`Hello ${req.body.username}`)
	try {
		const user = await User.create(req.body)
		res.send(user.toJSON())
	} catch(err) {
		res.status(400).send({
			error: `${err}`
		})
	}
})

sequelize.sync()
	.then(() => {
		app.listen(port)
	})
