/*
In JavaScript, almost everything is object

Primitives vs Object = 2types of values in JS

Primitives = numbers, strings, booleans, undefined, null
Object = funcations, arrays, objects, dates, wrappers

OOP =
- Objects interacting with one another through mthods and properties
- Used to store data, structure applications into modules, keep code clean

i.e. Previous 'John' + 'Mark' + etc
There's a better way - create a blueprint - in many languages it's called a class. In JavaScript = constructor

Inheritence = 
- When 1 obj is based on another obj. Object gets access to another objects properties and methods
- JavaScipt = Prototype-based language. 
-- Each and every object has a protyped property
-- To allow inheritence, must add into prototype. Prototype is where to put properties/methods for other objects to inherit/call
-- ^ above is 'Prototype Chain'

*/

// // var john = {
// //     name: 'John'
// //     yearOfBirth: 1990,
// //     job: 'teacher'
// // };


// //// ** Creating objects using function constructor (below)
// // - function constructor = a blueprint - typically capital letter first

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
    // this.calculateAge = function() {
    //     console.log(2016 - this.yearOfBirth);
    //    // return this.age = 2016 - this.yearOfBirth;
    // }   
}

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }   
// Person.prototype.calculateAge = function() {
//     console.log(2016 - this.yearOfBirth);
// };
// //// above prototype attached calculateAge() method to 'Person'

// Person.prototype.lastName = 'Smith'les 


// var john = new Person('John',1990,'teacher');
// console.log(john.lastName);
// john.calculateAge();

// // Above == instansciation - instances of contstructor (class) Person. 
// // Above = When use 'New' a new empty object created, then function is called. In a regular function object, this points to global variable. "New" makes it so this variable doesnt get pointed to global object, but instead the new empty object 
//Person call with parameters specified
// // Above = 'new' operator takes care of 'this'. 'this' points to new object (not global variable, like 'this' usually does)

// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// john.calculateAge(); 
// mark.calculateAge(); 
// jane.calculateAge();
//// Method is no longer in constructor/class. but works because added to prototype property of Function Constructor (Person.prototype.[method])

//// Playing with objects and function constructors

// var Animal = function(type,classification,legs,domesticated,yearsOld){
//     this.type = type;
//     this.classification = classification;
//     this.legs = legs;
//     this.domesticated = domesticated;
//     this.yearsOld = yearsOld;
// }

// var dog = new Animal('dog','mammal',4,true,9);
// var lion = new Animal('lion','mammal',4,false,2);
// console.log(dog);
// console.log(dog.type);
// console.log(lion.legs);
// console.log(lion.extinct);

// Animal.prototype.extinct = 'notExtinct' ;
// // Animal.prototype.dogYears = function(yearsOld) {
// //     var dogYears = this.yearsOld * 7;
// //     console.log(dogYears);
// // }

// // dog.dogYears(dog.yearsOld);

// Animal.prototype.dogYears = function() {
//     var dogYears = this.yearsOld * 7;
//     return this.dogYears = dogYears;
//     // console.log(dogYears);
// }
// dog.dogYears();
// console.log(dog);
// // console.log(lion.classification);
// // console.log(lion.extinct);


/* In console, john variable has proto, and proto of that is object. In object proto, there are methods that can be used like.. 
john.hasOwnProperty('job')
> True
john.hasOwnProperty('lastName')
> false
john instanceof Person 
> true

//// Almost everything is an object
var x = [2,4,6];
> undefined
x
> [2,4,6]
console.info(x)
> 0:2
> 1:4
> 2:6 
> length:3
x.length = 3
// notice x has a prototype property of array

*/

/** ** Another way to create objects that inherit using Object.Create */

// // With object.create - different - first define an object that will act as the protype, then create new object based on that proto

// var personProto = {
//     calculateAge: function() {
//         console.log(2016 - this.yearOfBirth);
//     }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';
// // 'john' in console

// var jane = Object.create(personProto,{
//     name: {value:'Jane'},
//     yearOfBirth: {value:1969},
//     job: {value:'designer'},
// });
// // first way was not ideal, as object empty, then fill with data. Second = specify data to have in object. Notice strange 'Value' syntax 
// // object.create builds an object that inherits directly from the one passed in 1st argument
// // function constructor - newly created object inherits from constructors prototype property

// // big pro for object.create, easier to create complex inheritence structure bc directly specify which obj is proto

/* *******Primitives vs Objects***********
big diff = variable containing primitives, variables actually hold that value. With Objects, variable doesn't have real copy, but a reference */ 

// var a=23;
// var b=a;
// a = 46;
// console.log(a);
// console.log(b);
// //// b does not change, they hold their values (not reference)

// var obj1 = {
//     name:'John',
//     age:26,
// };
// var obj2 = obj1; 
// obj2.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);
// // notice obj1 & obj2 get set to 30
// // when say obj1 = obj2, we did not create new object, just reference to exact same object

// // Functions
// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: ' Lisbon',
// };

// function change(a,b) {
//     a = 30; 
//     b.city = 'San Francisco'; // not actually function, but reference
// }

// change(age,obj);
// console.log(age);
// console.log(obj.city);
// // primitive '27' unchanged, but object (city) did change

/*** Advanced Functions
 * -Function is instance of the Object type
 * -Function behaves like any other object
 * -Can store variables in functions
 * -Can pass argument of function to another
 * -Can return a function from function
 * ^^^ because of all that, we have 'first-class functions'
*/

// // Passing functions as arguments

// var years = [1990,1965,1937,2005,1998];

// function arrayCalc(arra,fn) {
//     // arra == array // fn == function
//     var arrayResult = [];
//     for (var i=0; i< arra.length; i++) {
//         arrayResult.push(fn(arra[i]));
//     }
//     return arrayResult;
// }

// // Callback function below. In arrayCalc, no () after calcAge because calling it later (in 'arrayCalc)
// function calculateAge(element) {
//     var ages = 2016-element;
//     return ages;
// }
// // callback, dertermine if full age
// function isFullAge(el) {
//     return el >= 18;
// }
// function maxHeartRate(el) {
//     // el is age
//     if (el >= 18 && el <= 81) {
//     return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1;
//     }
// }

// var ages = arrayCalc(years,calculateAge);
// var fullAges = arrayCalc(ages,isFullAge);
// var rates = arrayCalc(ages,maxHeartRate);
// console.log(ages);
// console.log(fullAges);
// console.log(rates)

//// Functions returning functions

// function interviewQuestion(job) {
//     // For each job, return diff function that will log a question to console
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', explain UX design');
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log(name+', what\'s your subject?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello'+name+', what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('John');
// var designerQuestion = interviewQuestion('designer');
// designerQuestion('John');
// designerQuestion('Jane');
// designerQuestion('Mark');

// // diff way
// interviewQuestion('teacher')('Mark');
// // interviewQuestion ('teacher') returns function, and Mark is passed

// // Win = Random score > 5; Lose if <- 5
// // IIFE
// // How to make variable hidden? Anonymous - put in function

// /*
// function game() {
//     var score = Math.random() * 10; 
//     console.log(score >=5);
// }
// game();
// // Above - if only purpose it to hide score variable, don't need entire function. Better way == (below) immediately invoked function expression
// */
// (function () {
//     var score = Math.random() * 10;
//     // console.log(score>=5);
// })();
// // Make parser believe we have an expression, not declaration. Then invoke function
// // console.log(score);
// (function (goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score>=5 - goodLuck);
// })(5);


/* ******Closures************
*/

// function retirement(retirementAge) { 
//     var a = ' years left until retirement';
//     return function(yearOfBirth) {
//         var age = 2016 - yearOfBirth;
//         console.log((retirementAge - age) + a );
//     }
// }

// var retirementUS = retirement(66);
// retirementUS(1990);
// retirement(66)(1990);
















