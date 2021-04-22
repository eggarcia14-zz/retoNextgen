const router = require('express').Router();

const authController = require('../controllers/authController');

router.get('/', authController.redirectSignup);

router.get('/login', authController.formLogin);
router.post('/login', authController.authLogin);

router.get('/signup', authController.formSignup);
router.post('/signup', authController.userReg);

router.get('/userEntry/:id', authController.userEntry);
router.post('/userEntry/:id', authController.regEntry);




module.exports = router;
