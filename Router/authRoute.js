const route=require('express').Router();
const authController=require('../controller/authController')
const authMiddleware=require("../middleware/auth")
const adminAuth=require('../middleware/AdminAuth')

route.post(`/register`,authController.register)
route.post(`/login`,authController.login)
route.get(`/logout`,authController.logout)
route.get(`/refreshToken`,authController.refreshToken)
route.get(`/userinfo`,authMiddleware,authController.getUserInfo)

route.get(`/getAllUsers`,authMiddleware,adminAuth,authController.getAllUsers)
route.patch(`/resetPassword`,authController.resetPassword)
route.post(`/send-email`,authController.sendMail)
route.patch(`/addToCart`,authMiddleware,authController.addToCart)
route.get(`/orders`,authMiddleware,authController.getOrders)

route.patch(`/updateProfile/:id`,authMiddleware,authController.profileUpdate)

module.exports=route
