/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. the window  binding
* 2. implicit binding is more specific than the window. 
* 3. New binding a function that returns an object 
* 4. Explicit binding all I know is not to use arrow functions more specific than the first two methods
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myName (name) {
    console.log(this);
    return name;
}
myName("Vladimir");


// Principle 2

// code example for Implicit Binding
const myObj = {
    name: "james",
    sayName: function(lastName) {
        console.log(` My name is ${this.name} ${lastName}`);
        //console.log(this);
    }
};
myObj.sayName("Bond");


// Principle 3

// code example for New Binding
function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  newman.speak();
  newman.speak();
// Principle 4

// code example for Explicit Binding
const feline = {
    "pet": "Cats"
}
function mypets(pet1,pet2,pet3){
    return `I love ${this.pet} and I have three more pets ${pet1},${pet2},${pet3}`;
}

const pets = ["Lion","Panther","Tiger"];

console.log(mypets.call(feline,...pets));