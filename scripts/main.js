console.log("JavaScript");

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
