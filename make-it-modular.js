const myModule = require("./mymodule");
let path = process.argv[2];
let ext = process.argv[3];
myModule(path, ext, function(err, data){
    if(err){
        console.log(err);
        return;
    }
    data.forEach(function(el){
        console.log(el);
    });
});
