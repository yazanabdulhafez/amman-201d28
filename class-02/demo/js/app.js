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

let makeTrouble = prompt('Are you a trouble maker?').toLowerCase();

// yes
// YES Yes YEs yeS

console.log(makeTrouble);

// makeTrouble = makeTrouble.toLowerCase();

if(makeTrouble === 'yes' || makeTrouble === 'y') {
  alert('Calm down ');
} else if (makeTrouble === 'no' || makeTrouble === 'n') {
  alert('Good job');
} else {
  alert('Pease type (yes) or (no) or (y) or (n)');
}
