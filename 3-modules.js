const names = require('./4-name');
const sayHi = require('./5-utils')
const data = require('./6-alt')
require('./7-mind-grenade')

console.log(names);
console.log(sayHi);
console.log(data)

console.log(data.SinglePerson.name)

sayHi(names.areeba)
sayHi(names.rabiya)
sayHi("Babloo Gang")