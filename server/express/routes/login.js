var express = require('express');
var router = express.Router();
var url = require('url');

router.get('/', function(req, res, next) {
    res.render('login');
});
router.get('/submit',function(req, res){
    var params = url.parse(req.url, true).query;
    userlogin 
    res.render('result',{user: params.user, pw: params.pw});
    //res.send("login success");
})

module.exports = router;
