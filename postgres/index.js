const express = require('express')
const bodyParser = require('body-parser')
const pgsql = require('./pgsql')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', pgsql.getUsers)
app.get('/users/:id', pgsql.getUserById)
app.post('/users', pgsql.createUser)
app.put('/users/:id', pgsql.updateUser)
app.delete('/users/:id', pgsql.deleteUser)
  
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

