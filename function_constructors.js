// Function Constructors //

//paramaters '()' are the variables we want to set in our object
var Person = function (name, yearOfBirth, job) {
    this.name = name; // equal to the paramater of the function
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
//Add all methods and properties we want to be inherited into the constructors prototype property
Person.prototype.calculateAge = function () {
    console.log(2016 - this.yearOfBirth);
}


/*This creates a new 'john' object using the 'Person' function constructor
These variables and new objects will inherit the 'calculateAge' function in the function constructor from the prototype*/

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

/*this will call and execute the 'calculateAge' function on the new objects and inherit the 'calculateAge' function from their prototype*/
john.calculateAge();
jane.calculateAge();
mark.calculateAge();