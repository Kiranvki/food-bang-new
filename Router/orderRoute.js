const route =require('express').Router();
const orderCtrl =require('../controller/orderCtrl');
const adminAuth = require('../middleware/AdminAuth');
const auth=require("../middleware/auth")


route.post(`/newOrder`,auth,orderCtrl.newOrder);

route.get(`/allOrders`,orderCtrl.getAll);
route.delete(`/order/:id`,auth,adminAuth,orderCtrl.delete)

module.exports=route;