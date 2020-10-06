const express=require('express');
const {protect}=require('../middlewares/auth')
const {register,login,getMe}=require('../controllers/auth');
const router=express.Router();
router.route('/register').post(register);
router.route('/login').post(login);
router.route('/me').get(protect,getMe)
module.exports=router
