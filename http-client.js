const http = require("http");
let url = process.argv[2];
http.get(url, function (response) {
    response.setEncoding('utf-8');
    response.on('error',function(){} )
    response.on('data',function(chunk){
        console.log(chunk);
    })
    response.on('end',function(){
    })
})