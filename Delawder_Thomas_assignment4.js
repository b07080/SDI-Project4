//_______________________________________________________
//_______________________________________________________
// STRING FUNCTION THAT CHANGES FIRST LETTER TO UPPERCASE

var string = "my string example";

var caseFunction = function() {

    firstLetter = string.substring(0,1); 
    
    var newFirstLetter = firstLetter.toUpperCase(); 
    
remainingString = string.substring(1);

string = newFirstLetter + remainingString;

return newFirstLetter;

}

caseFunction();  // CALL THE FUNCTION
string;          // Here I am Re-calling the string to check the change to uppercase


//_______________________________________________________
//_______________________________________________________
// STRING FUNCTION FOR URL CHECK


var http = "http:";                     
var https = "https:";  

var checkUrl = function(url) {      

if (url.substring(0,5) == "http:") 
    return true;
    
if (url.substring(0,6) == "https:") 
    return false; 
}

checkUrl()  // CALL FUNCTION - Input variable data to check

//_______________________________________________________
//_______________________________________________________
// NUMBER FUNCTION - Find the difference between two dates

var dayOfMonthOne = 1;
var dayOfMonthTwo = 11;

var howLongAgo = function() {
var difference = dayOfMonthTwo - dayOfMonthOne;

return difference;

}

howLongAgo(difference)   //CALL THE FUNCTION - asking the difference between variables

//_______________________________________________________
//_______________________________________________________

//First line of code for library
// you can call it and add any food into it

var foodDemand = function(food) {
    console.log("I want to eat" + " " + food);
    
   
};

foodDemand("dog meat");


// another line of code just to help add some more usable parts

var orangeCost = function(totalCost) {
    console.log(totalCost * 5);
};
orangeCost(5);





// another line of hopeless coding assuming that I can connect this with something

var areaBox = function(length, width) {
         return length * width;
};



//____________________________________________________________
// global variables

// functions
var myFunction = function(arg1, arg2) {
    // local variables
    var booleanReturn;
    
    if (arg1 < arg2) {
        console.log("true");
        booleanReturn = true;
    } else {
        console.log("false");
        booleanReturn = false;
    }
    
    return booleanReturn;
    
}

//main code
var myBooleanReturn =myFunction(1,10);

//____________________________
