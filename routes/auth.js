const {Router} =require('express');
const router  = new Router();

const AuthController  = require('../controllers/auth');

router.post('/login',AuthController.logIn);
router.post('/signin',AuthController.signIn);

module.exports = router;