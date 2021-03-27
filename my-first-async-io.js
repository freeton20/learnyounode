const fs = require("fs");
let path = process.argv[2];
fs.readFile(path, function (err, buf) {
    let sum = Object.values(buf).reduce(function(sum,el){
        if(el === 10){
            return sum+1;
        }
        return sum;
    },0)
    console.log(sum);
})

