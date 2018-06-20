// Advanced JavaScript: Objects and Functions


// Object.create
//Define an object that will act as the prototype
//Create a new object based on that prototype

//Write the prototype as a simple object
var personProto = {
    calculateAge: function () {
        console.log(2016 - this.yearOfBirth);
    }
};

//pass it the object that we defined to be the prototype object, this creates an emtpy object so we must fill it with the data
var john = Object.create(personProto);

//fill the object with data 
