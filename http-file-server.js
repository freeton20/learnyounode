const http = require("http");
const fs = require("fs");
let server = http.createServer(function(request, response){
    let rs = fs.createReadStream(process.argv[3]);
    rs.on("open", function () {
        rs.pipe(response);
    })
    rs.on("error",function (){
        response.end();
    })
})

server.listen(process.argv[2]);