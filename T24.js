var myString = 'I\'m a Student name'; //putting back slash before will not close the string just add the quotation mark as character in the string

var myString2 = 'He said "Bye" ';

console.log(myString);
console.log(myString2);

//length of a string - property
console.log(myString.length);

// methods of strings - functions
console.log(myString.toUpperCase());
console.log(myString.indexOf("a"));
//if there is not a matching index it will return a -1
console.log(myString.indexOf("roma"));

if(myString.indexOf("roma") === -1){
    console.log("Word roma is not in the string");
}
else{
    console.log("word roma starts at the position of "+ myString.indexOf("roma"));
}


var string1 = "abc";
var string2 = "ABC";

console.log(string1 === string2);
console.log(string1 === string2.toLowerCase());


