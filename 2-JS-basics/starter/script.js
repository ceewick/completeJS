/*
*Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

var _3years = 3;
var JohnMark = 'John and Mark';
*/
/*
***Variable mutation and type coercion
*/

// var firstName = 'John';
// var age = 28;

// console.log(firstName+' '+age)

// var job,isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName+' is '+age+' year old '+job+'. Is he married? '+isMarried);

// // Variable Mutation = change value of variable
// age = 'twenty eight';
// job = 'driver';

// alert(firstName+' is '+age+' year old '+job+'. Is he married? '+isMarried);

// //prompt('What is his last name?');
// var lastName = prompt('What is his last name?');
// console.log(firstName+' '+lastName);

/**************************************
 * Basic Operators
*/

// var year, yearJohn, yearMark; 
// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// // Math Operators
// yearJohn = now - 28;
// yearMark = now - 23;

// console.log(yearJohn);

// console.log(now+2);
// console.log(now*2);
// console.log(now/10);

// // logical operators
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// // typeof operator
// console.log('typeof for johnOlder = '+typeof johnOlder);
// console.log('typeof for ageJohn = '+typeof ageJohn);
// var x;
// console.log(typeof x);

/*
* Operator Precendence
*/

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // Multiple Operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);
// console.log(ageJohn);

// // Multiple assignments
// var x,y; 
// x = y = (3+5)*4-6; // 8 * 4 - 6 // 32-6 // 26
// console.log(x,y);

// // More Operators
// //x = x*2;
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// //x += 1;
// x++;
// console.log(x);
// x--;
// console.log(x);

// Coding Challenge
// var weightMark, weightJohn, heightJohn, heightMark, BMI;
// weightMark = 190;
// heightMark = 70;
// weightJohn = 170;
// heightJohn = 70;
// bmiMark = weightMark/(heightMark^2);
// bmiJohn = weightJohn/(heightJohn^2);
// console.log('bmiMark = '+bmiMark+'\n'+'bmiJohn = ',bmiJohn);

// var markGreaterThanJohn = bmiMark>bmiJohn;
// console.log('Is Mark\'s BMI greater than John\'s? '+markGreaterThanJohn);

/*******
 * If / Else statements 
 */

//  var firstName = 'John';
//  var civilStatus = 'single';

//  if (civilStatus === 'married') {
//      console.log(firstName+' is married!');
//  } else {
//      console.log(firstName+' is not married');
//  }

//  var isMarried = false;
//  if (isMarried) {
//     console.log(firstName+' is married!');
// } else {
//     console.log(firstName+' is not married');
// }

// var weightMark, weightJohn, heightJohn, heightMark, BMI;
// weightMark = 190;
// heightMark = 70;
// weightJohn = 170;
// heightJohn = 70;
// bmiMark = weightMark/(heightMark^2);
// bmiJohn = weightJohn/(heightJohn^2);
// console.log('bmiMark = '+bmiMark+'\n'+'bmiJohn = ',bmiJohn);

// // var markGreaterThanJohn = bmiMark>bmiJohn;
// // console.log('Is Mark\'s BMI greater than John\'s? '+markGreaterThanJohn);

// if (bmiMark > bmiJohn) {
//     console.log('Mark\'s BMI is higher than John\'s');
// } else {
//     console.log('John\'s BMI is higher than Mark\'s');
// }

/*********
 * Boolean Logic
 
 && = true if ALL are true
 || = true of ONE are true
 not (!) = inverts true/false value

 Examples = 
 var age = 16;

 age>= 20; // => false
 age < 30; // => true
 age>= 20; // => false
 age >= 20 && age < 30; => false
 age >= 20 || age < 30; => true
 
 */

//  var firstName = 'John';
//  var age = 20;

//  if (age < 13){
//      console.log(firstName+' is a boy');
//  } else if (age >= 13 && age < 20) {
//      console.log(firstName+' is a teenager');     
//  } else if (age >= 20 && age < 30) {
//     console.log(firstName+' is a young man.');
//  } else {
//     console.log(firstName+' is a man');
//  }

/*** 
* Ternary Operator and Switch Statement
*/
/* Ternary is conditional that allows us to write if/else statement in one line*/

//  var firstName = 'John';
//  var age = 20;

// // Ternary Operation

// age >= 18 ? console.log(firstName+' drinks beer') 
//  : console.log(firstName+' drinks juice');
//  // condition + if + else

// var drink = age >= 18 ? 'beer':'juice';
// console.log(drink);

// if (age >= 10) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }
// console.log(drink)

// //// Switch Statement
// var job = 'developer';
// switch (job){
//     case 'teacher':
//         console.log(firstName+' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName+' drives an Uber.');
//         break;
//     case 'designer':
//     case 'developer':
//         console.log(firstName+' designs websites.');
//         break;
//     default:
//     console.log(firstName+'doesn\'t work');
// }

//  var firstName = 'John';
//  var age = 17;

//  switch (true) {
//      case age < 13:
//         console.log(firstName+' is a boy');
//         break;
//      case (age >= 13 && age < 20):
//         console.log(firstName+' is a teenager'); 
//         break;    
//      case (age >= 20 && age < 30): 
//         console.log(firstName+' is a young man.');
//         break
//     default:
//         console.log(firstName+' is a man');
//  }

/***
* Truthy and Falsey values and equality operators
* falsey vals == undefined,null,0,'', Nan
* they will be false when 
* truthy vaile = values that will be considered true
*/

// var height; 

// // height = 1 // true
// // height = 0 // falsy
// // concern if 0 is answer, wanting defined
// if (height) { // if height equals TRUE
//     console.log('variable is defined');
// } else {
//     console.log('variable has NOT been defined');
// }

// height = 0
// if (height || height === 0) { // if height equals TRUE or equals 0
//     console.log('variable is defined');
// } else {
//     console.log('variable has NOT been defined');
// }

// height = 23
// // Equality Operators
// if (height == '23') {
//     console.log('True = The "== operator does type coercion');
// }
// // if did height === 23; that's strict and would be false because of // type difference. Best to use strict

/* Challenge **
John and Mike play basketball in different DataTransferItemList. In the latest 3 games, John's team scored 80. 120, and 103 points. Mike's team scored 116, 94, and 123 points. 

1) Calculate the average score for each team
2) Decide which team winds in average (highest avg score), and pring the winner to console. Also include the average score in the output
3) Then change the scores to show different winners. Don't forget to take into account there might be a draw (same avg score)

4) *Extra* Mary also plays and her team scored 97, 134, 105 points. Log the avg winner to console. HINT: You will need the && operator. 
*/

// averageJohn = (80+120+103)/3
// averageMike = (116+94+123)/3
// averageMary = (200+200+300)/3

// if (averageJohn > averageMike) {
//     console.log('John\'s average was higher');
// } else if (averageJohn < averageMike) {
//     console.log('Marks score is higher');
// } else {
//     console.log('it was a draw')
// }

// averageJohn = (80+120+103)/3
// averageMike = (200+300+200)/3
// averageMary = (200+200+300)/3

// if (averageJohn > averageMike && averageJohn > averageMary) {
//     console.log('John\'s average was highest');
// } else if (averageJohn < averageMike && averageMary < averageMike){
//     console.log('Mikes score is highest');
// } else if ((averageMary > averageJohn) && (averageMary > averageMike)){ 
//     console.log('Mary was highest');
// } else if (averageMary === averageJohn) {
//     console.log('John and Mary tied');
// } else if (averageMary === averageMike) {
//     console.log('Mary tied Mike');

// } else {
//     console.log('John and Mike tied')
// }
//     ///etc

//// ***** Funtions ****** 
//// D.R.Y = Dont Reepeat Yourself
// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);

// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65-age;
//     if (retirement > 0) {
//         console.log(firstName+' retires in '+retirement+' years.');
//     } else {
//     console.log(firstName+' has been retired for '+(-retirement)+' years.')
//     }
// }

// yearsUntilRetirement(1990,"John")
// yearsUntilRetirement(1948,"Mary")
// yearsUntilRetirement(1968,"Mike")

// /* Function Statements and Expressions */

// // function declaration - doesnt produce immediate result
// // function whatDoyouDo(job,firstName){}

// // function expression - produces immediate result
// var whatDoYouDo = function(job,firstName){
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code'; // return finishes function, dont need 'break'
//         case 'driver':
//             return firstName+' drives Uber';
//         case 'designer':
//             return firstName+' designs beautiful websites';
//         default:
//             return 'Does something else';
//     }
// }
// console.log(whatDoYouDo('teacher','John'));
// console.log(whatDoYouDo('designer','Jane'));
// /* 
// expressions = peice of code that ALWAYS produces a value
// example: 2+3 // console.log(whatDoYouDo('teacher','John')); //
// statements = just perform action - don't produce immediate value
// example: if/else statements, while loop

// /* Arrays */
// var names = ['John','Mark','Jane'];
// var years = new Array (1990, 1969, 1948);
// //// both of above produce array

// console.log(names[0]);
// console.log(names.length);
// console.log(names)

// names[1] = 'Ben';
// names[5] = 'Mary';
// console.log(names);
// names[names.length] = 'Mary'; // puts it at the end
// console.log(names);

// // Different Data Types
// var john = ['John', 'Smith', 1998, 'teacher', false];
// console.log(john)

// // methods for arrays
// john.push('blue'); //  push adds element at end of array
// john.unshift('Mr.'); // adds element at beginning
// john.pop(); // removes element at the end
// john.shift(); // removes first element
// console.log(john);
// console.log(john.indexOf(1998)); // returns position of element
// // ^ Produces -1 if not in array. Good way to test

// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer'
// : 'John IS a designer';
// console.log(isDesigner)


// /* ***** Coding Challeng ***

// John and family 3x restuarants. Bills were $124, $48, and $268

// John likes to tim 20% of bill when less than $50. 15% when bill is $50 - $200. 18% if bill is over $200

// In the end, John wants 2x arrays:
// 1) containing all three tips (one for each bill)
// 2) containing all 3x final paid amounts 
// */

// var subTotals = [124,48,268]
// subTotal = 124

// var tip = 0

// function tipAmount(subTotal) {
//     if (subTotal < 50) {
//         tip = subTotal * .20;
//     } else if (subTotal > 200) {
//         tip = subTotal * .18;
//     } else {
//         tip = subTotal * .15;
//     }
//     return tip;
// }

// function totalAmount(subTotal) {
//     return subTotal + tipAmount(subTotal);
// }

// console.log(totalAmount(124));

// // Instructor Answer === 
// var subTotals = [124,48,268]
// subTotal = 124

// function tipCalculator(bill) {
//     var percentage;
//         if (bill<50) {
//             percentage = .2;
//         } else if (bill>200) {
//             percentage = .18;
//         } else {
//             percentage = .15
//         }
//     return percentage * bill;
// }

// var tips = [tipCalculator(subTotals[0]),
//             tipCalculator(subTotals[1]),
//             tipCalculator(subTotals[2])];

// var finalValues = [subTotals[0] + tips[0],
//                     subTotals[1] + tips[1],
//                     subTotals[2] + tips[2],
//                 ]
// console.log(tips, finalValues)


/*  **** Objects and Properties **** */

// objects = key/value pairs - each value has a name (key)
// use objects to group
// array = order matters // objects == order does not

// // Object Literal
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane','Mark','Bob','Emily'],
//     job: 'teacher',
//     isMarried: false
// };

// // firstName is property of John object
// console.log(john);
// console.log(john.firstName);
// console.log(john.isMarried);
// console.log(john['firstName']);
// console.log(john['firstName']);
// var x = 'birthYear';
// console.log(john[x]);

// // mutation
// john.job = 'designer'; 
// john['isMarried'] = true;
// console.log(john);

// var jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane)

// /*  **** Objects and Methods **** */
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane','Mark','Bob','Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function(birthYear) {
//         return 2018 - birthYear;
//     }
// };

// console.log(john.calcAge(1990));

// // this <- uses property from present/current object
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1992,
//     family: ['Jane','Mark','Bob','Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function() {
//         return 2018 - this.birthYear;
//     }
// };

// console.log(john.calcAge());

// age = john.calcAge();
// john.age = age;
// // OR john.age = john.calcAge()
// console.log(john);

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1996,
//     family: ['Jane','Mark','Bob','Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function() {
//         this.age = 2018 - this.birthYear;
//     }
// };

// john.calcAge();
// console.log(john);


/** Coding Chalenge*** 
And let's remember the first coding challenge, where Mark and John compared their Body Mass Indexes. So let's now implement the same functionality, but this time with objects and methods.

1. For each of them, create an object with properties
for their full name, mass, and height.

2. Then, add a method to each object to calculate the BMI. SSave the BMI to the object to and also return it from the method.

3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI value.

Remember: BMI = mass / height^2
*/

// var mark = {
//     fullName: 'Mark Large',
//     weight: 190,
//     height: 60,
//     calcBMI: function() {
//         this.bmi = this.weight / (this.height^2);
//         return this.bmi;
//     }
// };

// var john = {
//     fullName: 'John Small',
//     weight: 150,
//     height: 60,
//     calcBMI: function() {
//         this.bmi = this.weight / (this.height^2);
//         return this.bmi;
//     }
// };

// console.log(mark);

// // john.calcBMI();
// // mark.calcBMI();
// // console.log(john,mark)

// // if (mark.bmi > john.bmi) {
// //     console.log('Mark BMI is higher');
// // } else {
// //     console.log('John\'s BMI is higher');
// // }

// console.log(john,mark)

// if (mark.calcBMI() > john.calcBMI()) {
//     console.log('Mark BMI is higher');
// } else {
//     console.log('John\'s BMI is higher');
// }

/* ***loops and iteration *** */
// each loop 3 parts
// (initial value of counter, the condition that is evaluated before each iteration, a counter)
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// // i = 0, 0<10 true, log i to console, i++
// // i = 1, 1<10 true, log i to console, i++

// for (var i = 1; i <= 20; i += 2) {
//     console.log(i);
// }

// var john = ['John', 'Smith', 1998, 'teacher', false];

// for (var i = 0; i < john.length; i++) {
//     console.log(john[i]);
// }

// var i = 0;
// while(i < john.length) {
//     console.log(john[i]);
//     i++;
// }

//// continue and break statements
// var john = ['John', 'Smith', 1998, 'teacher', false];

// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') break;
//     console.log(john[i]);
// }
// // Loop backwards
// for (var i = john.length - 1; i >= 0; i--) {
//     console.log(john[i]);
// }
// john = john.reverse()
// console.log(john)

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).*/

var mark = {
    name: 'Mark',
    bills: [77, 375,110,45],
    calculateTip: function() {
        this.tips = [];
        this.totals = [];
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentaged based on tipping rules. Output tip and total
            var percentage;
            var bill = this.bills[i];
            if (bill > 300) {
                percentage = .25;
            } else if (bill < 100) {
                percentage = .20;
            } else {
                percentage = .10;
            }
            this.tips[i] = bill*percentage;
            this.totals[i] = this.tips[i] + bill;
        }
    }
}

var john = {
    name: 'John',
    bills: [124,48,268,42],
    calculateTip: function() {
        this.tips = [];
        this.totals = [];
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentaged based on tipping rules. Output tip and total
            var percentage;
            var bill = this.bills[i];
            if (bill > 200) {
                percentage = .18;
            } else if (bill < 50) {
                percentage = .20;
            } else {
                percentage = .10;
            }
            this.tips[i] = bill*percentage;
            this.totals[i] = this.tips[i] + bill;
            // Add to corresponding array
            // this.tips[i] =  
        }          
    }
}

john.calculateTip();
mark.calculateTip();
// console.log(john);
// console.log(john.tips);
// console.log(john.totals);

console.log(mark);
console.log(mark.tips );

function average(tips) {
    for (i = 0; i < tips.length; i++) {
        allTips = 0
        allTips += [tips[i]];
        return allTips;
    } 
}
markAverage = average(mark);
console.log(markAverage);
// function average = {

// }




// function tipCalculator(bill) {
    //     var percentage;
    //         if (bill<50) {
    //             percentage = .2;
    //         } else if (bill>200) {
    //             percentage = .18;
    //         } else {
    //             percentage = .15
    //         }
    //     return percentage * bill;
    // }
    
    // var tips = [tipCalculator(subTotals[0]),
    //             tipCalculator(subTotals[1]),
    //             tipCalculator(subTotals[2])];