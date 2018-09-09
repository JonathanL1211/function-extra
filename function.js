// function basic:
// 1.1.1
// create a function named hello that prints out 'Hello World'
// call that function
function hello (){
    console.log("Hello World");
}

//1.1.2 create a function that takes in a string as a parameter and prints it
function hola (string){
    console.log(string);
}

/*1.1.3 create a function that takes in 2 numbers as parameters and returns the product of the 2 numbers
add a conditional statement such that multiply will only happen if at least one of the numbers is greater than 0
add a conditional statement such that if the multiply does not happen, print 'Criteria not met'*/
function twoNum (param1, param2){
    if (param1 > 0 || param2 >0){
        return param1 * param2;

    }
    else{
        alert("Criteria not met");
    }
}
//console.log(twoNum(-1,0));

//1.1.4 create a function that takes in an array of numbers as a parameter and prints the odd numbers
function arr (array){
    for (var i = 0 ; i < array.length; i++){
        if (array[i] % 2 != 0){
            console.log(array[i]);
        }
    }
}
/*var myArray = [1,2,3,4,5,6,7,8,9,10];
arr(myArray);*/

/*1.1.5 create a function that converts a string into an array
sort the letters in alphabetical order
convert the array back into a string*/
function convert(string){
    var strSplit = string.split("");
    var newStr = strSplit.sort();
    return newStr;
}
console.log(convert("string"));
function convertStrToArr(array){
    var newArr = array.join("");
    return newArr;
}
console.log(convertStrToArr(convert("string")));














