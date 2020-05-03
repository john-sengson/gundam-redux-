const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')

const gundamRoutes = require('./public/gundam')


const server = express()

server.use(express.json())
server.use('/api/v1/gundams', gundamRoutes)
server.use(express.static(path.join(__dirname, './public')))


server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')

server.use('/', gundamRoutes)



module.exports = server
