const fs = require("fs");
let path = process.argv[2];
let filter = process.argv[3];
fs.readdir(path, function (err, list) {
    if(err){
        console.log(err);
    }else{
        list.forEach(function (el){
            let fileNameData = el.split(".");
            if(fileNameData[1] && fileNameData[1] === filter)
            {
                console.log(el);
            }
        })
    }
})