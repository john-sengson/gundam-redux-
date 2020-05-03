const express = require('express')

const db = require('../../db/gundamInfo')


const router = express.Router()

router.get('/', (req, res) => {
  return db.getGundam()
    .then(gundam => {
      const viewData = {
        gundam : gundam }
        res.status(200).json(gundam)
        res.render(viewData)
      })   
})

module.exports = router