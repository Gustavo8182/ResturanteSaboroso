var  conn= require('./../inc/db');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    conn.query("SELECT * FROM tb_users ORDER BY name", (erro,result)=>{
      if (erro) {
          res.send(erro);        
      }else{
        res.send(result);
      }
    })
  
});

module.exports = router;
