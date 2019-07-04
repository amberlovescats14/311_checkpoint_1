const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

//get all
router.get('/', userController.listUsers)

// get by id
router.get('/:id', userController.getOne)

//create user
router.post('/create', userController.createOne)

//update user
router.put('/:id', userController.updateUser)

router.delete('/:id', userController.deleteUser)

module.exports = router