var express = require('express');
var router = express.Router();

/* To  get all the desired pages */
router.get('/', function(req,res,next){
    res.render('Home',{title:'home'});
});

router.get('/about',function(req,res,next){
    res.render('about',{title:'About'});
});
router.get('/projects',function(req,res,next){
    res.render('projects',{title:'Projects'});
});
router.get('/contact',function(req,res,next){
    res.render('contact',{title:'contact'});
});
router.get('/services',function(req,res,next){
    res.render('services',{title:'services'});
});

module.exports = router;