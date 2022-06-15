function keys(obj){
    let key = [];
    for (let i in obj) key.push(i);
    return key;
}

module.exports = keys;
