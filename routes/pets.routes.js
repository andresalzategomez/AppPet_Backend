const express = require('express')
const router = express.Router()
const petsController = require('../controllers/pets.controller')

router.post('/', petsController.createPets)
router.get('/', petsController.getPets)
router.get('/findByStatus', petsController.getPetsByStatus)
router.get('/:petsId', petsController.getPetsId)
router.put('/', petsController.updatePets)
router.delete('/:petsId', petsController.deletePetsById)
router.post('/:petsId', petsController.updatePetsById)
router.get('/category/:categoryId', petsController.getCategory)
router.get('/tags/:tagId', petsController.getTags)
router.get('/status/:statusId', petsController.getStatus)

module.exports = router