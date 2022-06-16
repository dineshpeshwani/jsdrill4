const defaults = require('./defaults');

const testObject = { name: 'bruce wayne', age: '', location: 'Gotham' };

console.log(defaults(testObject.age));