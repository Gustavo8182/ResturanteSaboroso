var conn = require('./../inc/db');
var menus = require('./../inc/menus');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  menus.getMenus().then(results=>{
    res.render('index',{
      title: 'Restaurante Saboroso!',
      menus: results,
      isHome: true
    });  
  });
});
  

  router.get('/contact', function(req, res, next) {
      
    res.render('contact',{        
      backgroud: 'images/img_bg_3.jpg',
      title: 'Restaurante Saboroso!',
      h1: 'Diga olá!',
      isHome: false
      });
  });

  router.get('/menu', function(req, res, next) {

    menus.getMenus().then(results=>{
      res.render('menu',{
        title: 'Restaurante Saboroso!',
        backgroud: 'images/img_bg_1.jpg',
        h1:"Saboreie nosso menu!",
        menus: results,
        isHome: false
      });  
    });
  });

  router.get('/reservation', function(req, res, next) {
    res.render('reservation',{
      title: 'Reservas - Restaurante Saboroso!',
      backgroud: 'images/img_bg_2.jpg',
      h1: 'Reserve uma mesa!',
      isHome: false
      });
  });

  router.get('/services', function(req, res, next) {
    res.render('services',{
      title: 'Serviços - Restaurante Saboroso!',
      backgroud: 'images/img_bg_1.jpg',
      h1: 'É um prazer pode servir',
      isHome: false
      });
  });

module.exports = router;
