const express = require('express')
const migrate = require('./migration')
migrate();

const PeopleController = require('./controllers/peopleController')
const app = express()
const port = 3000

app.get('/', PeopleController.index)

app.listen(port, () => {
  console.log(`Example app listening at http://0.0.0.0:${port}`)
})