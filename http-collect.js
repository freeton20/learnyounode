const http = require('http');

http.get(process.argv[2],function (response) {
    let rawData = '';
    response.setEncoding('utf-8')
    response.on("data", function(chunk){
        rawData += chunk;
    })
    response.on("end", function(){
        console.log(rawData.length);
        console.log(rawData);
    })
})