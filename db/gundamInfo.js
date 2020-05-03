const connection = require('./connection')

function getGundam (db = connection) {
  return db('gundam').select()
}


module.exports = {
  getGundam
}
