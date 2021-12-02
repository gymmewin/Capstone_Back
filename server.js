//Dependencies
const express = require('express')
const app = express()
const postgres = require('./postgres.js')
const cors = require ('cors')

//Middleware
app.use(express.json())
app.use(cors())

//Database
postgres.connect()

//Controllers
const ticketsController = require('./controllers/tickets.js')
const usersController = require('./controllers/users.js')
app.use('/tickets', ticketsController)
app.use('/users', usersController)

//Listener
app.listen(process.env.PORT || 3000, () => {
   console.log('Capstone Tickets Is Listening');
})
