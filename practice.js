//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
// 1) What is the purpose of the 'this keyword'?

// the 'this' keyword is used when you are refering to the owner of the function that we are executing. It can be invoked explicitly or inplicitly.

// 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

// 1. Global Object: 'this' is by defalut a global object.
// 2. Parent Object 'this' refers to the parent object in that function.
// 3. New Operator: 'this' refers to the newly created object in that function.
// 4. call/apply calling: 'this' refers to the first argument passed to call/apply. if the argument is null it refers to its default global object.

// 3) What is the difference between call and apply?

// apply will pass an argument as an array. call will pass individually.

// 4) What does .bind do?

// 'bind' lets us tell 'this' what to bind to when the function is invoked.


//Next Problem

//Create an object called user which has the following properties.
//username --> which is a string
//email --> which is a string
//getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

var user = {
  username: 'asdf',
  email: 'asfdf',
  getUsername: function () {
    return this.username;
  }
};

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


console.log(user.getUsername());


// Write the function definitions which will make the following function invocations function properly.
//function Car()
var Car = function (brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function () {
    this.move += 10;
    return this.move;
  };
};

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);


prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).



//Continuation of previous problem

var getYear = function () {
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Code Here



//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function () {
  console.log(this.username);
};

setTimeout(getUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  //Answer Here

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
