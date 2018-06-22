// Closures

//function that calls function that calculates years until retirement
function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function (yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    };
}

//store the result of calling this function and the variable will be a function
retirement(66)(2018);

//take this code and make it cleaner by using 'closures'
/*function interviewQuestion(job) {
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
}*/

function interviewQuestion(job) {
    return function (name) {
        if (job === 'teacher') {
            console.log('You are a teacher ' + name);
        } else if (job === 'designer') {
            console.log('You are a designer ' + name);
        } else {
            console.log('You ain\'t nothing and you suck ' + name);
        }
    };
}

interviewQuestion('designer')('Sammy');