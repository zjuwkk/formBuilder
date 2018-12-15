var express = require('express');
var router = express.Router();
var url = require('url');
var formmodel = require('../model/formbuilder');

router.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html")
});
router.post('/create',function(req, res){
    //res.send("helllo"); //测试通信
    var submitdata = req.body.data;
    console.log("data:",submitdata);
    var resdata = formmodel.createform(submitdata);

    res.sendStatus(resdata);
})

module.exports = router;
