const express = require('express')
const router = express.Router()

const connection = require('../helper/db')

// Chercher tous les cadeaux dans la BDD et les renvoyer en JSON
router.get('/gifts', (req, res) => {
  const sql = 'SELECT * FROM gift'
  connection.query(sql, (err, result) => {
    if (err) throw err
    return res.status(200).send(result)
  })
  res.json([])
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
// Ajouter la route POST avec le chemin /gifts


// Router.delete('/:gift/:id', (req, res) => {
//   res.send
// })
// Ajouter la route DELETE avec le chemin /gifts/:giftId
// (giftId = l'id du cadeau à supprimer)

module.exports = router
