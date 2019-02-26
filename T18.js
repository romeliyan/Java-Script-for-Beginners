for(i = 0 ; i < 10 ; i++){

    if(i === 5){
        console.log("hi");
        continue;   //for 5 dont execute the code
                    //skip the rest
    }
    console.log(i);

    if(i === 7){
        break;      //break up any point of the loop
                    //not printing the rest
    }


}

console.log("I have broken out of the loop");