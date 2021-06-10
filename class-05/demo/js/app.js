'use strict';

// let a = "Ola Altiti";
// const developer = 'none';
// console.log(developer);
// // let a = 'Laith';

// console.log(a);

// if(4 === 4){ console.log(true); }

// if(4 === 4){
//   console.log(true);
// }

// if(4===4)
// {
//   console.log(true);
// }

// if(cond) {
//   console.log();
// } else if () {

// } else {

// }

// And &&
// Or ||
// Not !

// let makeTrouble = prompt('Are you a trouble maker?').toLowerCase();

// yes
// YES Yes YEs yeS

// console.log(makeTrouble);

// makeTrouble = makeTrouble.toLowerCase();

// if(makeTrouble === 'yes' || makeTrouble === 'y') {
//   alert('Calm down ');
// } else if (makeTrouble === 'no' || makeTrouble === 'n') {
//   alert('Good job');
// } else {
//   alert('Pease type (yes) or (no) or (y) or (n)');
// }

//  Truthy value
//  'name'
//  empty space
//  true
//  +- all the numbers !(0)
//  ['',33,44]
//  +- Infinity

// Falsy value
// undefined
// 0
// null
// '' ""
// NaN -> 'abed' + 25
// ``
// false

// let userName;

// console.log(typeof(25 + 'abd'));

// if(0) {
//   console.log('inside the cond');
// }


// Arrays
/*
  Special data type
  let arr = []
*/

let studentName = ['Waleed', 'Walaa', 'Odeh', 'Thaer', 'Qusai', 'Anas', 'Mohammed', 'Renad', 'Silwadi', 'Mosa', 'Hamza'];

// console.log(studentName[4]);
// console.log('Mohammed '.length);
// i++
// i = i + 2



// for(let i = 0; i < studentName.length; i++) {
//   console.log(studentName[i]);
// }

// let makeTrouble = prompt('Are you a trouble maker?').toLowerCase();

// while(makeTrouble !== 'no' && makeTrouble !== 'n' && makeTrouble !== 'yes' && makeTrouble !== 'y') {
//   makeTrouble = prompt('Are you a trouble maker? please enter yes, no, n, y!').toLowerCase();
// }

// if(makeTrouble === 'yes' || makeTrouble === 'y') {
//   alert('Calm down ');
// } else {
//   alert('Good job');
// }

// let question;
// do {
//   question = prompt('are you human?');
// } while(question !== 'yes' && question !== 'y' && question !== 'no' && question !== 'n');


// function ( statements execute )
// reuseable, parameters, output

// function userQuestion(question, correctAns, unCorrectAns) {
//   let userInput;
//   do {
//     userInput = prompt(question);
//   } while(userInput !== 'yes' && userInput !== 'y' && userInput !== 'no' && userInput !== 'n');

//   if(userInput === 'yes' || userInput === 'y') {
//     console.log(correctAns);
//   } else {
//     console.log(unCorrectAns);
//   }
// }

// userQuestion('Do I love pets?', 'yes i like cats', 'no I don\'t');
// userQuestion('Do I drink coffee?', 'yes', 'no');
// userQuestion('Do I like cars?', 'yes', 'no');
// userQuestion('Do I hate cats?', 'yes', 'no');
// userQuestion('Am I a developer?', 'yes', 'no');
// userQuestion('Are you a human?', 'yes', 'no');

// userQuestion('Whats your name?', 'Welcome to my website');

function branchTest() {
  console.log('we have a new branch');
}

branchTest();