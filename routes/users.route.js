const express = require('express');
const { getAlluser, createUser, getOneuser, deleteUser, updateUser } = require('../controllers/users.controller');
const router = express.Router();

// user Related api
router.get('/', getAlluser)
router.get('/:id', getOneuser)
router.post('/', createUser)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)


module.exports = router;