const connection = require('./connection')

function getGundam (db = connection) {
  return db('gundam')
}


module.exports = {
  getGundam
}
