//primitives vs objects


// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);


// Objects

//create our literal object
var obj1 = {
    name: 'John',
    age: 26
};

//reference our literal object
var obj2 = obj1;
//change our literal object values
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

// Functions

//create primitive
var age = 27;

//create our object literal
var obj = {
    name: 'Brad',
    city: 'Drew'
};

//mutate data in object literal
function change(a, b) {
    a = 30;
    b.city = 'Portland';
}

//pass 'age' as the 'a' argument, and the 'obj' as the 'b' argument
change(age, obj);

console.log(age);
console.log(obj.city);