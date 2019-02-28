function getAverage(a,b){
    var average = (a + b) / 2;
    console.log(average);
}

getAverage(7 , 12);

//fuctions can also return a value

function getRAverage(a,b) {
    var avg = (a + b)/2;
    return avg;

}
var myResult = getRAverage(7,8);
console.log(myResult);