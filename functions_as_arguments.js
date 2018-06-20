// Passing functions as arguments 
var years = [1990, 1965, 1937, 2005, 1998];

//functions that recieves the array and returns a result array and do the calculations based on a function that we pass into the calculation function

//calculation function
function arrayCalc(arr, fn) {
    //create empty array
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

//callback function to be used as our 'fn'. These are functions we pass into functions that will then call them later
function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function birthdayYear(el) {
    return 2016 - el;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAge = arrayCalc(ages, isFullAge);
var birthday = arrayCalc(ages, birthdayYear);
var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
console.log(fullAge);
console.log(ages);
console.log(birthday);
