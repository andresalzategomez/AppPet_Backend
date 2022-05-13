const express = require('express')
const helmet = require('helmet')
const sequelize = require('./conexion')
const bodyParser = require('body-parser')
const cors = require('cors')
const port  = 3000

const petsRoute = require('./routes/pets.routes')

const app = express()
app.use(helmet())
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())

app.use('/v1/api/pets', petsRoute)

app.listen(port , () =>{
    console.log("Servidor iniciado en puerto: " + port)
})

module.exports = app