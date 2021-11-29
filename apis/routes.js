const express = require('express');
const productController = require('../controllers/productController');
const clientController = require('../controllers/clientController');
const productServices = require('../services/productServices');
//define a router and create routes
const router = express.Router();

//routes for dynamic processing of products
//-----------------------------------------------
//route for listing all products
router.get('/api/catalog', productController.getCatalogue);
router.get('/api/article/:id', (req, res) => {    
    productServices.searchIDService(req.params.id, function(err, rows) {        
        res.render('article', { product: rows });    
    });
});
//routes for dynamic processing of clients
//registration route
router.post("/api/register", clientController.registerControl);
//login route
router.post("/api/login", clientController.loginControl);
//export router
module.exports = router;