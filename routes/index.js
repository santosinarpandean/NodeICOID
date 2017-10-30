var express   = require('express');
var router    = express.Router();
var api       = require('./root_api.js');
var instance  = new api();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/test', function(req, res, next) {
    instance.getData(function(callback){
        res.send(callback);
    });
});

// router.get('/getTest', function(req, res, next) {
//     instance.testPost('test POST',function(callback){
//         res.send(callback);
//     });
// });

router.post('/getBalanceToken',function(req,res,next){
    var abi                 = req.body.abi;
    var contract_address    = req.body.contract_address;
      instance.getBalanceToken(abi,contract_address,function(callback){
            res.send(JSON.stringify(callback));
      });
});


router.post('/middlewareICOID/public/api/create-contract',function(req,res,next){
    res.send(req.body);
    console.log(req.body);
});

router.get('/transferToken',function(req,res,next){

    var abi                 = req.body.abi;
    var contract_address    = req.body.contract_address;
    var transfer_to_address     = req.body.transfer_to_address;
    var total_transfer          = req.body.total_transfer;
    instance.transferToken(abi,contract_address,transfer_to_address,total_transfer,function(callback){
        res.send(JSON.stringify(callback));
    });
});

router.get('/testcall',function(req,res,next){
   var abi = '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"ownerBalance","type":"uint256"},{"name":"tokenTotalSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"tokenDecimals","type":"uint8"},{"name":"tokenSymbol","type":"string"}],"payable":false,"type":"constructor"},{"payable":false,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]';
   var contract_address     = '0x5b8112ca561aad7598fb1e0ee63d2dc12e1e147d';
    instance.testCall(abi,contract_address,function(callback){
        res.send(callback);
    });
});



module.exports = router;
