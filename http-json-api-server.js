const http = require("http");
let server = http.createServer(function (req, res){
    const url = new URL('http://localhost:' + process.argv[2] + req.url);
    if(url.pathname === '/api/parsetime'){
        let dt = new Date(url.searchParams.get('iso'));
        res.writeHead(200,{ 'Content-Type': 'application/json' })
        res.write(JSON.stringify({
            "hour": dt.getHours(),
            "minute": dt.getMinutes(),
            "second": dt.getSeconds()
        }));
        res.end();
    }
    if(url.pathname === '/api/unixtime'){
        let dt = new Date(url.searchParams.get('iso'));
        res.writeHead(200,{ 'Content-Type': 'application/json' })
        res.write(JSON.stringify({
            "unixtime": dt.getTime()
        }));
        res.end();
    }

})
server.listen(process.argv[2])