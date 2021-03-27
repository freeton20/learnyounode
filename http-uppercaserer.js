const http = require("http");

let server = http.createServer(function (req, res){
    if(req.method === 'POST') {
        let data = [];
        req.on('data', function (chunk) {
            data.push(chunk)
        });
        req.on('end', function () {
            let lc= Buffer.concat(data).toString();
            res.end(lc.toUpperCase());
        })
    }
})

server.listen(process.argv[2])