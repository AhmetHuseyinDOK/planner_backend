const {Router} =require('express');

const router  = new Router();
const AuthMiddleware = require('../middlewares/auth');
const InfoController  = require('../controllers/info');
router.use(AuthMiddleware.password);

router.get('/info',InfoController.info);

module.exports = router;