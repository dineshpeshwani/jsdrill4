const keys = require('./keys');

function map(obj, callback) {
    let result = {};
    keys(obj).forEach(function (key) {
        result[key] = callback.call(obj, obj[key], key, obj);
    });
    return result;
}


module.exports = map;