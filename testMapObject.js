const map = require('./mapObject');

const myObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

newObject = map(myObject, function(x) { return x+" a"; });
console.log(newObject)
