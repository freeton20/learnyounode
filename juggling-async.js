const http = require("http");
const [node, path, ...urls] = process.argv;
let results = [];
    urls.forEach(function (url, index) {
       http.get(url, function (response) {
           let tmpData = '';
           response.on("data", function (chunk) {
               tmpData += chunk;
           });
           response.on("end", function () {
               results[url] = tmpData;
               if(Object.keys(results).length === urls.length){
                   urls.forEach(function (url){
                       console.log(results[url])
                   })
               }
           })
       });
   })

