var ico = function(){

    var api = this;
    Web3 = require('web3');
    var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

    web3.eth.defaultAccount = web3.eth.accounts[0];

    // var http_request_helper=require('./http_request.js');
    // var core_request = new http_request_helper();
    // api.testPost = function(param1,callback){
    //     core_request.incoming_transaction(param1, function(postData){
    //         // console.log(callback);
    //         callback(postData);
    //     })
    // };

    api.getData = function(callback){
        console.log(a);
        callback("ini");
    };

    //get balance token
    api.getBalanceToken = function(contract_abi,contract_address,callback){
        try {
            // var root_contracts = '/var/www/html/middlewareICOID/storage/app/public/icoID/KAKASHI/build/contracts/KAKASHI.json';

            var contract = web3.eth.contract(JSON.parse(contract_abi)).at(contract_address);
            var data_return                 = {
                contract_name   : contract.name.call(),
                contract_symbol : contract.symbol.call(),
                total_token     : contract.balanceOf(web3.eth.accounts[0]),
                decimals        : contract.decimals.call(),
            };

            // console.log(contract.name(web3.eth.accounts[0]));

            var final_return                = {
                'error'                     : 0,
                'returns'                    : data_return,
            };
            // final_return['error']           = 0;
            // final_return['return']          = data_return;
            callback(final_return);
            // console.log("your token : " + contract.balanceOf(web3.eth.accounts[0]));
        }catch(err){
            var final_return                = {
                'error'                     : 1,
                'error_message'             : err.message,
            };
            callback(final_return);
        }
    };

    this.transferToken = function(contract_abi,contract_address,transfer_to_address,total_transfer,callback){
        try{
            var contract    = web3.eth.contract(JSON.parse(contract_abi)).at(contract_address);
            var doTransfer  = contract.transfer(transfer_to_address,total_transfer);

            var data_return                 = {
                transfer_to_address     : transfer_to_address,
                total_transfer          : total_transfer,
                transaction_address     : doTransfer,
            };
            var final_return                = {
                'error'                     : 0,
                'returns'                    : data_return,
            };
        }catch(err){
            var final_return                = {
                'error'                     : 1,
                'error_message'             : err.message,
            };
        }
        callback(final_return);
    }

    this.testCall = function(contract_abi,contract_address,callback){
        // var contract    = web3.eth.contract(JSON.parse(contract_abi)).at(contract_address);
        // callback(final_return);
        var contract    = web3.eth.contract(JSON.parse(contract_abi)).at(contract_address);
        console.log(contract.name.call());
        // var estimateGas =  web3.eth.estimateGas({from: web3.eth.accounts[0], gasPrice: gasPrice, gas: gasLimit, data: datacode});
        callback("test");

    }
};

module.exports = ico;