//Q1 +Q2
const myArray = ["apple", "banana", "cherry"];
//Q3
console.log(myArray[0]);

//Q4
console.log(myArray[myArray.length - 1]);
//Q5
myArray.unshift("mango");
console.log(myArray);

//Q6
myArray.pop();
console.log(myArray);

//Q7
const numbers = [5, 10, 15, 20, 25];
numbers.splice(1, 1);
console.log(numbers);

//Q8
function getLength(numbers) {
  let arraylength = numbers.length;
  console.log(arraylength);
}
getLength(numbers);

//Q9
let temperatures = [72, 68, 74, 80, 76];
function getMax(temperatures) {
  console.log(Math.max(...temperatures));
}

getMax(temperatures);

// 10

function CheckBanana(myArray) {
  if (myArray.includes("banana") === true) {
    //    console.log(myArray.includes("banana"));
    console.log("true");
  } else console.log("false");
  //myArray.includes("banana");
}

CheckBanana(myArray);
