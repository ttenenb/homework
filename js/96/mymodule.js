const fs = require('fs');

module.exports = function (directory, ext, callback) {

    fs.readdir(directory, (err, list) => {
        if (err) {
            return callback(err);
        }
        const allFilteredFiles = [];
        list.forEach(file => {
            if (file.endsWith('.' + ext))
                allFilteredFiles.push(file)
        })
            callback(null,allFilteredFiles)

    });
}
