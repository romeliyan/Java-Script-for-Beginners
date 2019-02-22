//Operator Shorthand

var myVar = 5;

myVar += 5;  // myVar = myVar + 5;

myVar -= 5;  // myVar = myVar - 5;

myVar *= 5;  // myVar = myVar * 5;

myVar /= 5;  // myVar = myVar / 5;

//increment
myVar++;  //print first and increment

++myVar;

//decrement
myVar--;

--myVar;

//Math Methods

var number = -2;

document.write(Math.abs(number)); //returns the absolute value

document.write(Math.max(number,4)); //4
document.write(Math.min(number,4)); //-2
document.write(Math.pow(number,2));

var number = 2.565;
document.write(Math.round(number)); //3

document.write(Math.random()); //0.156463

document.write(Math.round(Math.random() * 10));