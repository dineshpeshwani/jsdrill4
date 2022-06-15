function invert(obj){
    var ret = {};
    for(var key in obj){
      ret[obj[key]] = key;
    }
    return ret;
  }

  module.exports = invert;