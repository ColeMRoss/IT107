//variables
var friendName = window.prompt("Friends Name");

var greeting;
if (timeOfDay === "morning") {
    greeting = "Good morning";
} else if (timeOfDay === "afternoon") {
    greeting = "Good afternoon";
} else if (timeOfDay === "evening") {
    greeting = "Good evening";
} else {
    greeting = "Hello";
}

var timeOfDay = ("morning");


var YourName = window.prompt("Your Name?");
var destination = window.prompt("Dream Vacation Destination?");












//functions
function sayHelloWorld() {
    console.log("Hello, world!");
}


function ilovejavascript() {
    console.log("I love JavaScript")
}

function greetAFriend(friendName) {
    console.log(`Hello, ${friendName}!`)
}


function greetAFriend(friendName, timeOfDay) {
    var greeting;
    if (timeOfDay === "morning") {
        greeting = "Good morning";
    } else if (timeOfDay === "afternoon") {
        greeting = "Good afternoon";
    } else if (timeOfDay === "evening") {
        greeting = "Good evening";
    } else {
        greeting = "Hello";
    }
    var personalGreeting = `${greeting}, ${friendName}!`;
    console.log(personalGreeting);
}


function Vacation(YourName, destination) {
    var vacationlocation = YourName + " would love to visit " + destination; console.log(vacationlocation)
}






//tacotruck
var shelltype = ("Hard");
var topping = ("lettuce");
function makeataco(shelltype, topping){ 
var finishedtaco = ("Your " + shelltype + "shell taco with " + topping + " is ready!");
console.log(finishedtaco)
}






//pizza








//Calculator

//addition
var numb1text = prompt("Add number");
var numb2text = prompt("Plus number");
var numb1 = parseFloat(numb1text);
var numb2 = parseFloat(numb2text);
function add(numb1, numb2){
var addition = (numb1+numb2);
console.log(addition);
}

//subtract













//
sayHelloWorld();
ilovejavascript();
greetAFriend(friendName, timeOfDay);
Vacation(YourName, destination);
makeataco(shelltype, topping);
add(numb1, numb2);