const fs = require("fs");
module.exports = function (path, filter, callback) {
    fs.readdir(path, function(err, data) {
        if (err)
           return callback(err);

        let filtered = data.filter(function (el) {
            let fileNameData = el.split(".");
            if (fileNameData[1] && fileNameData[1] === filter) {
                return el;
            }
        });
        return callback(null, filtered);
    });
}
