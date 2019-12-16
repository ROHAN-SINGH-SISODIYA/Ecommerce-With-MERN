const express = require('express');
const router = express.Router();

const {create,
       productById,
       read,remove,
       update,list,
       listRelated,
       listCategories,
       listBySearch,
       getPhoto} = require('../controllers/product');
const {requireSignIn,isAdmin,isAuth} = require('../controllers/auth');
const {userById} = require('../controllers/user');

router.get('/product/:productId',read)
router.post("/product/create/:userId",requireSignIn,isAuth,isAdmin,create);

router.get('/products',list)
router.get('/products/related/:productId',listRelated)
router.get('/products/categories',listCategories)

router.param("userId",userById);
router.param("productId",productById);

router.delete("/product/:productId/:userId", requireSignIn,isAuth,isAdmin,remove)
router.put("/product/:productId/:userId", requireSignIn,isAuth,isAdmin,update)

router.post("/products/by/search", listBySearch);
router.get("/product/photo/:productId",getPhoto)

module.exports=router;