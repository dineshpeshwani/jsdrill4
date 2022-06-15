function invert(obj){
    let ret = {};
    for(let key in obj){
      ret[obj[key]] = key;
    }
    return ret;
  }

  module.exports = invert;