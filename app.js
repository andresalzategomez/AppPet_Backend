const express = require('express')
const helmet = require('helmet')
const sequelize = require('./conexion')
const bodyParser = require('body-parser')
const cors = require('cors')
const port  = 3000

const app = express()
app.use(helmet())
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())

app.listen(port , () =>{
    console.log("Servidor iniciado en puerto: " + port)
})

module.exports = app