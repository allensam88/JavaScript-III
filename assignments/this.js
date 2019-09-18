/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: when we are in the global scope, 'this' simply becomes the browser window because it has no other form of reference.  It's basically choosing the entire container.

* 2. Implicit Binding: Inside the brackets of an Object's method (which is basically a function), 'this' can be used to reference the Object.

* 3. New Binding: When utilizing a constructor function, 'this' can be used to reference the Object template that is used for each new Object. 

* 4. Explicit Binding: Whenever JavaScript’s call or apply method is used, 'this' is explicitly defined as an argument within that method.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function printDate(date) {
    console.log(this);
    return date;
  }
//printDate("September 18, 2019");

// Principle 2

// code example for Implicit Binding
const movieStar = {
    name: 'Leonardo DiCaprio',
    age: 44,
    gender: "M",
    nominated: 5,
    won: 1,
    awardSummary: function() {
      console.log(`${this.name} has been nominated for ${this.nominated} academy awards and won ${this.won}.`);
    //   console.log(this);
    }
  };
//movieStar.awardSummary();

// Principle 3

// code example for New Binding
function scifiMovie(title, rating) {
    this.title = title;
    this.rating = rating;
    this.statement = function() {
      console.log(`${this.title} is a ${this.rating} science fiction film.`);
    //   console.log(this);
    };
  }
  
const starWars = new scifiMovie('Star Wars', 'great');
const starTrek = new scifiMovie('Star Trek', 'fantastic');
const transformers = new scifiMovie('Transformers', 'terrible');

// starWars.statement();
// starTrek.statement();
// transformers.statement();

// Principle 4

// code example for Explicit Binding
// starWars.statement.call(transformers);
// starTrek.statement.apply(starWars);