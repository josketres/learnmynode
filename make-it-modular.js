var ls = require('./ls.js');

ls(process.argv[2], process.argv[3], function(error, data) {
    if(error) return;

    data.forEach(function(item) {
        console.log(item);
    });
});
