var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', (req, res)=>{
  res.render('about');
});

router.get('/blog', (req, res)=>{
  res.render('blog');
})

router.get('/shop', (req, res)=>{
  res.render('product');
})

router.get('/contact', (req, res)=>{
  res.render('contact');
})

router.get('/shoppingcart', (req, res)=>{
  res.render('shoping-cart');
})

router.get('/productdetail', (req, res)=>{
  res.render('product-detail')
})


module.exports = router;
