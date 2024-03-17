const express = require('express')
const db = require('./db')
const app = express()
const port = 5418
require('dotenv').config();
const PORT = process.env.PORT || 5418;

const Person = require('./models/person')
const menuItem = require('./models/menu')

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', async (req, res) => {
  res.send('Welcome to my hotel . How can I help you, we have a wide variety of menu to offer')
})

const menuRoutes = require('./routes/menuRoutes')
app.use('/main', menuRoutes)

const personRoutes = require("./routes/personRoutes")
app.use('/person', personRoutes)




app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
