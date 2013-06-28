

// Thomas Delawder
// SDI 1306
// Project 4 - Function Library


// June 27, 2013


// A quick incite into my coding below;  My last code was under a time crunch.  I have included 

// some variables that helped me with testing.  I have also noted "calling the functions" to show that 

// I understand how they work. Also note: I have really struggled with SDI and I can say that as of today I

// have put forth my best efforts with these 6 functions below.  I hope that the simplicity shows that I have

// tried to emulate ease and that I have steered away from more confusing script until I understand more of JavaScript.

// Lastly I have tried to make viewing / interpreting my work easy on the eyes.  Please enjoy.


//________________FUNCTION 1_____________________________
//_______________________________________________________
// STRING FUNCTION - changes the first letter case to uppercase

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



//________________FUNCTION 2_____________________________
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



//________________FUNCTION 3_____________________________
//_______________________________________________________
// NUMBER FUNCTION - Find the difference between two dates

var dayOfMonthOne = 1;
var dayOfMonthTwo = 11;

var howLongAgo = function() {
var difference = dayOfMonthTwo - dayOfMonthOne;

return difference;

}

howLongAgo(difference)   // CALL THE FUNCTION - asking the difference between variables outputs 10 days.



//________________FUNCTION 4_____________________________
//_______________________________________________________
// STRING FUNCTION that follows a pattern 

var pattern = function(numbers) {
    	
var groupNumbers = numbers.substring(0,3) + " " + numbers.substring(3,6) + " " + numbers.substring(i);

return groupNumbers

};

pattern("12345678")  // CALLED THE FUNCTION - input numbers and they will group into 3 substrings just like a phone number.



//________________FUNCTION 5_____________________________
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

// Could also simply code Math.max(1, 2, 3, 4);  OR  Math.min(1, 2, 3, 4); To quickly check for the highest or lowest value



//________________FUNCTION 6_____________________________
//_______________________________________________________
// NUMBER FUNCTION - Can format a number to decimal. parseFloat I have seen most commonly used in currency.

var roundToDecimal = function(number, decimals) {
    
    return parseFloat(number.toFixed(decimals));
}

// For this last function I read about the Math.floor and Math.ceil scripts for rounding but I have also read 

// that you can get produce some errors as well if you are not careful, so I kept this one super simple

// I have left the basic knowledge that the parseFloat function parses a string and returns a floating point number

// but also importantly if the first character cannot be converted to a number parseFloat returns NaN. 



// Thomas Delawder
// SDI 1306
// Project 4 - Function Library


// June 27, 2013



