/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. this keyword is a function and it provides contexts whenever we use our functions and has access to our window object
* 2. without this, you won't be able to have access to the object. For example, if you want name or color inside the object, using this would show the name and color. Without it, nothing would appear. (Implicit Binding)
* 3. Using a constructor function will push this inside the object that is being generated and will bind on it.
* 4. whenever you use .call or apply, it must be explictly defined
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this)

// Principle 2

// code example for Implicit Binding
const sonGoku = {
  name: 'Goku',
  skills: 'Martial Artist',
  speak: function() {
    console.log(`Hi, my name is ${this.name} and I am a ${this.skills}.`)
  }
}
sonGoku.speak()

// Principle 3

// code example for New Binding
function Evil(name, height, power) {
  this.name = name;
  this.height = height;
  this.power = power;
  this.speak = function() {
    console.log(`I am ${this.name}, ${this.height} and my power level is over ${this.power}!!`)
  }
}

const evilMan = new Evil('Vegeta', '5\'5', '8000')
evilMan.speak()
// Principle 4

// code example for Explicit Binding
function Person(value) {
  Evil.call(this, value)
}
console.log(new Evil('Cell').name);
