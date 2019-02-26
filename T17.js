for (age = 0 ; age < 10 ; age++ ){
    console.log("Your age is less than 10");
}

document.write("You are now over 10");


var links = document.getElementsByTagName("a");
for(i = 0; i < links.length ; i++){
    console.log("this is link no "+i);
}
document.log("All links now looped");