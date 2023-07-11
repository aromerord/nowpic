const { Router } = require('express');
const { findAllUsers } = require('../controllers/users');

const router = Router();

router.get('/', findAllUsers);

module.exports = router;