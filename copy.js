/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
this.name = name;
this.age = age;
this.stomach = [];
}
Person.prototype.eat = function(eat){
  if(this.stomach.length < 10){
  this.stomach.push(eat);
  }else{
    return this.stomach;
  }
}
Person.prototype.poop = function(poop){
  if(this.stomach.length = 0){
   function empty(stomach){
    stomach = [];
   }
  }
}

Person.prototype.toString = function(){
  return `${this.name} ${this.age}`;
}



/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
// function Baby(name, age, favoriteToy) {
//   Person.apply(this);
//   this.name = name;
//   this.age = age;
//   this.favoriteToy = favoriteToy;
// }

const Baby = new Person(name, age, favoriteToy){

}

// Baby.prototype = Object.create(Person.prototype);
// function Baby(name, age, favoriteToy){
//   this.name = name;
//   this.age = age;
//   this.favoriteToy = favoriteToy;
// }

Baby.prototype.play = function(play){
    return `Playing with ${this.favoriteToy}`;
}