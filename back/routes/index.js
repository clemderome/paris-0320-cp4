const express = require('express')
const router = express.Router()

const connection = require('../helper/db')

router.get('/gifts', (req, res) => {
  const sql = 'SELECT * FROM gift'
  connection.query(sql, (err, result) => {
    if (err) throw err
    return res.status(200).send(result)
  })
})

router.post('/gifts', (req, res) => {
  const formData = req.body
  connection.query('INSERT INTO gift SET ?', formData, (err, result) => {
    if (err) {
      res.status(500).send('Erreur lors de la sauvegarde d´un cadeau')
    } else {
      res.sendStatus(200)
    }
  })
})

router.delete('/gifts/:id', (req, res) => {
  const giftId = req.params.id
  console.log(giftId)
  connection.query('DELETE FROM gift WHERE id = ?', [giftId], err => {
    if (err) {
      res.status(500).send('Erreur lors de la suppression d\'un cadeau')
    } else {
      res.status(200).send('Le cadeau a bien été supprimé')
    }
  })
})

module.exports = router
