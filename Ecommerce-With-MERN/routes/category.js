const express = require('express');
const router = express.Router();

const {create,categoryById,read,remove,update,list} = require('../controllers/category');
const {requireSignIn,isAdmin,isAuth} = require('../controllers/auth');
const {userById} = require('../controllers/user');

router.get('/category/:categoryId',read)
router.post("/category/create/:userId",
        requireSignIn,
        isAuth,
        isAdmin,
        create);

router.param("categoryId",categoryById);
router.param("userId",userById);

router.delete("/category/:categoryId/:userId", requireSignIn,isAuth,isAdmin,remove)
router.put("/category/:categoryId/:userId", requireSignIn,isAuth,isAdmin,update)
router.get('/categories',list)

module.exports=router;