var express = require('express');
const Product = require('../models/product-model');
var router = express.Router();

router.get('/',function(req,res){
  Product.find(function (err, products) {
    res.render('home',{
      title : 'A R U COSMETICS',
    products : products
  });
});
});

router.get('/about',function(req,res){
  res.render('aboutus',{title : 'About Us'});
});

router.get('/contact',function(req,res){
    res.render('contactus',{title : 'Contact Us'});
});

router.get('/lip',function(req,res){
  res.render('lip',{
    title : 'About lips',
  });
});

router.get('/eyeliner',function(req,res){
  res.render('eyeliner',{
    title : 'About Eyeliners',
  });
});

router.get('/cheek',function(req,res){
  res.render('cheek',{
    title : 'About Cheek',
  });
});

router.get('/vegan',function(req,res){
  res.render('vegan',{
    title : 'About Vegan Cosmetics',
  });
});
module.exports = router;


