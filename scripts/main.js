console.log("JavaScript");

// ********** START VARIABLES *************
let firstName = 'Beyonce';
let lastName = 'Knowles';

// console.log(firstName + lastName);
// console.log(`First Name: ${firstName} Last Name: ${lastName}`);

firstName = 'Dr. T';
lastName = 'Vasquez';

// console.log(firstName + lastName);
// console.log(`First Name: ${firstName} Last Name: ${lastName}`);

// const favoriteFood = 'Tacos';
// console.log(favoriteFood);

// favoriteFood = 'Gumbo';
// console.log(favoriteFood);

// ******** END VARIABLES **********

// ******** START DATA TYPES **********
// const dog = 'bark';
// console.log(typeof dog);

// const answer = 33;
// const negative = -14;

// console.log(typeof answer, typeof negative);

// const iLoveJavascript = true;
// console.log(typeof iLoveJavascript);

// ******** END DATA TYPES **********

// ******** START MATH **********
// console.log(Math.pow(2, 2)); // 4
// console.log(Math.pow(3, 2)); // 9
// console.log(Math.pow(3, 3)); // 27

// console.log(Math.round(6.5)); // 7
// console.log(Math.round(6.45)); // 6
// console.log(Math.floor(6.9999)); // 6
// console.log(Math.ceil(6.0000001)); // 7

const cat = 'kitty';
console.log(cat.length); // 5

// ******** END MATH **********

let firstName = 'Martin';
let lastName = 'Sisk';

console.log(`First Name: ${firstName} Last Name: ${lastName}`);

const dog = 'bark';
console.log(typeof dog);

const answer = 33;
const negative = -14;

console.log(typeof answer, typeof negative);

const iLoveJavascript = true;
console.log(typeof iLoveJavascript);

// ****** MATH ********

// const cat = kitty;
// console.log(cat.length); // 5

// ***** END MATH *******

//  ****** Functions *******

function sayHello() {
  console.log("Hello!");
}
sayHello();

const sayHey = function () {
  console.log("Hey!!");
}
sayHey();

const sayHi = () => {
  console.log("Hello!");
}
sayHi();

// ********* FUNCTIONS WITH ARGUMENTS **********

function logsHello(name) {
  console.log(`Hello, ${name}!`);
}
logsHello('Martin');
const sum = 55;

const addsTwoNumbers = (num1, num2) => {
  const sum = num1 + num2;
  console.log(sum);
  return sum;
};

console.log(sum);
console.log(addsTwoNumbers(2, 1));

// function thisIsTrue(arg1, arg2) {
//   if (arg1 !=== 'nice' && arg2 !=== 'Nice') {
//     console.log(`You are ${arg}`);
//   } else {
//     console.log('false')
//   }
// }
// thisIsTrue('nice', 'Nice');

const canDrive = (age) => {
  if (age >= 15) {
    return true;
  }
}
const ans = canDrive(13);
console.log(ans);
console.log(canDrive(15));

// ******* FUNCTIONS ********

// console.log("CONNECTED");

// function sayHello() {
//   console.log("Hello!");
// }

// const sayHello = function() {
//   console.log("Hello!");
// }

// const sayHello = () => {
//   console.log("Hello!");
// }

// sayHello();

// ******* FUNCTIONS WITH ARGUMENTS *****
function logsHello(name) {
  console.log(`Hello, ${name}!`);
}

// logsHello('Dr. T');
const sum = 55;

const addsTwoNumbers = (num1, num2) => {
  const sum = num1 + num2;
  console.log("Console log inside the function", sum);
  return sum;
}

console.log(sum);
console.log(addsTwoNumbers(2, 1));
console.log(sum);


// ********* Control Flow *********

// function thisIsTrue(arg1, arg2) {
//   if (arg1 !== 'nice' && arg2 !== 'Nice') {
//     console.log(`You are ${arg1}`);
//   } else {
//     console.log('false');
//   }
// }

// function thisIsTrue(arg1, arg2) {
//   if (arg1.length < 3) {
//     console.log(`You are ${arg1}`);
//   } else if (arg2.length > 8) {
//     console.log(`You are ${arg2}`);
//   } else {
//     console.log('You are NOTHING!');
//   }
// }

// thisIsTrue('ni', 'mickeymouse');

const canDrive = (age) => {
  if (age >= 15) {
    return true;
  }

  return false;
}

const answer = canDrive(12);
console.log(answer);
