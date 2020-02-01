var Mouse = require('./mouse');
var Cat   = require('./cat');

var Jerry = new Mouse('Jerry');
var Mickey= new Mouse('Mickey');
var Tom   = new Cat();

Tom.eat(Jerry);
Tom.eat(Mickey);
console.log(Tom);