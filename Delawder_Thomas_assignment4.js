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
console.log(booleanReturn);

//____________________________
