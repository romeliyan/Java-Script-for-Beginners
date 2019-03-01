//creating an empty array ---------------------------- 1
var myArray = [];

//storing values for the array by specifying each slot
myArray[0] = 10;
myArray[1] = 25;
myArray[2] = true;
myArray[3] = "hello";

//update values
myArray[2] = false;

//storing values for the array at once -----------------2
var myArray2 = [5,35,"hi",false];

//creating an array by new keyword ---------------------3
//this will specify how many slots
var myArray3 = new Array(5);

console.log(myArray.length);
console.log(myArray2.sort());
console.log(myArray2.reverse());

