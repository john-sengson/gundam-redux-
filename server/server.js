const path = require('path')
const express = require('express')

const gundamRoutes = require('./public/gundam')

const server = express()

server.use(express.json())
server.use('/api/v1/gundams', gundamRoutes)
server.use(express.static(path.join(__dirname, './public')))

module.exports = server
