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

caseFunction();  // Calling the function
string;          // Re-calling the string to check the change to uppercase


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
