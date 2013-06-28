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
    return true + http;
    
    if (url.substring(0,6) == "https:") 
        return true + https; 
    
        } else {
            return false + " it is NOT a " + http + " and also NOT " + https + ".";
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

howLongAgo(difference)   // CALL THE FUNCTION - asking the difference between variables outputs 10 days.

//_______________________________________________________
//_______________________________________________________
// STRING FUNCTION that follows a pattern 

var pattern = function(numbers) {
    	
var groupNumbers = numbers.substring(0,3) + " " + numbers.substring(3,6) + " " + numbers.substring(i);

return groupNumbers

};

pattern("12345678")  // CALLED THE FUNCTION - input numbers and they will group into 3 substrings just like a phone number.


//_______________________________________________________
//_______________________________________________________
// ARRAY FUNCTION - Finds the smallest value in the array (then all you need to ask is if its lower then the given Number)

var array = [11, 2, 3, 4];

var  findSmallestValue = function(array) { 

var smallestNumber = array[0];
    
    for ( i = 0; i < array.length; i++) {
    
	   if (array[i] < smallestNumber ) {
			smallestNumber = array[i];
			
		  return smallestNumber;		
		}
	}
};

findSmallestValue(array) // CALLED Function here 


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
