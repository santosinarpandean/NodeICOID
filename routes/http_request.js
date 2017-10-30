var http_helper = function (){
    var htt_helper = this;
    var request = require('request');


    htt_helper.incoming_transaction=function(param1,callback){
        console.log('incoming_call');
        var headers = {
            'User-Agent':       'Super Agent/0.0.1',
            'Content-Type':     'application/x-www-form-urlencoded'
        }

        var options = {
            url: 'url php',
            method: 'POST',
            headers: headers,
            form: {'param1':param1 }
        }

        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                // Print out the response body

                callback(body);
            }else{
                console.log(error+" "+response+" "+body);
                callback(error+" "+response+" "+body);
            }
        })
    }



};
module.exports = http_helper;