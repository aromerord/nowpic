const { Router } = require('express');
const { findAllUsers, createUser } = require('../controllers/users');

const router = Router();

router.get('/', findAllUsers);

router.post('/', createUser);

module.exports = router;