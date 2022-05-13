const express = require('express')
const router = express.Router()
const petsController = require('../controllers/pets.controller')

router.post('/', petsController.createPets)
router.get('/findByStatus', petsController.getPetsByStatus)
router.get('/:petsId', petsController.getPetsId)
router.put('/', petsController.updatePetsById)
router.delete('/:petsId', petsController.deletePetsById)
router.post('/:petsId', petsController.updatePetsById)

module.exports = router