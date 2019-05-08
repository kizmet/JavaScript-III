/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window Binding - objects are available at the highest level, Window/Global, and can be accessed by lower levels
* 2. Implicit Binding - objects bind to their own properties and methods
* 3. New Binding - object instances bind to properties/medthods of their prototype objects
* 4. Explicit Binding - object instances bind to their inherted object instance
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function windowPop(name) {
	this.name=name;
	// window.alert(name);
	console.log(name);
	return name;
}
windowPop("bryant");

// Principle 2

// code example for Implicit Binding

const hello =  {
	greeting: "Hi, you must be",
	sayHi: function(name) {
    	console.log( `${this.greeting} ${name}`);
    	return name;
  }
}
hello.sayHi('bryant');

// Principle 3

// code example for New Binding
function Visitor(name) {
	this.greeting = "Welcome fellow human ";
	this.name = name;
    this.sayHi = function() {
    	console.log( `${this.greeting}, you must be ${name}`);
  }
}
let bp = new Visitor('bryant');

bp.sayHi();

// // Principle 4

// // code example for Explicit Binding

function Bot (name) {
	Visitor.call(this,name);
	this.greeting = "Beep beep bit fellow bot"

}
Bot.prototype = Object.create(Visitor.prototype);
let bot = new Bot('spam bot');
bot.sayHi();
bot.sayHi.apply(bp);



