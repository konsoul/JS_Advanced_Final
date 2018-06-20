//Functions returning functions

//function builds a string using persons name as input for each job, function returning function
function interviewQuestion(job) {
    if (job === 'teacher') {
        return function (name) {
            console.log('You are a teacher ' + name);
        }
    } else if (job === 'designer') {
        return function (name) {
            console.log('You are a designer ' + name);
        }
    } else {
        return function (name) {
            console.log('You ain\'t nothing and you suck ' + name);
        }
    }
}

//store the function into a variable with the argument of which function to call inside the function
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

//call the variable with the stored function that calls the function inside a function passing the name in through the 'name' parameters of the anon function.
designerQuestion('Jane');
teacherQuestion('John');
interviewQuestion('teacher')('Mark');

var prices = [2500, 3500, 2800, 4500, 6500];

function propertyType(property) {
    if (property === 'residential') {
        return function (value) {
            console.log('Your property is ' + property + ' and is worth ' + value + ' dollars');
        }
    }
}

function arrayCalc(arr, fn) {
    //create empty array
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function priceCalc(el) {
    return 50 - el;
}

//propertyType('residential')(arrayCalc(prices, priceCalc));












