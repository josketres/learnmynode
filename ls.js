var fs = require('fs'),
    path = require('path');

module.exports = function(dir, ext, callback) {

    fs.readdir(dir, function(err, data) {
        if(err) return callback(err);

        var filtered = [];
        data.forEach(function(file) {
            if(path.extname(file).replace('.','') === ext) {
                filtered.push(file);
            }
        });
        callback(null, filtered);
    });

};

