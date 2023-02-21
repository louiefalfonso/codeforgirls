// make a text based game  using if else method with array and concatenation
let colorNames = [ "Yellow", "Orange", "Red", "Purple", "Blue", "Green"];
let colorNum = [1,2,3,4,5,6];

//ask user input
let response = prompt ("Let's Play Color Wheel. Pick a number from 1 to 6:")
if (response == 1){
    console.log("You pick number: " + colorNum[0] + " and it's " +colorNames[0]);
    document.write("You pick number: " + colorNum[0] + " and it's " +colorNames[0]);
}
else if (response == 2){
    console.log("You pick number: " + colorNum[1] + " and it's " +colorNames[1]);
    document.write("You pick number: " + colorNum[1] + " and it's " +colorNames[1]);
}
else if (response == 3){
    console.log("You pick number: " + colorNum[2] + " and it's " +colorNames[2]);
    document.write("You pick number: " + colorNum[2] + " and it's " +colorNames[2]);
}
else if (response == 4){
    console.log("You pick number: " + colorNum[3] + " and it's " +colorNames[3]);
    document.write("You pick number: " + colorNum[3] + " and it's " +colorNames[3]);
}
else if (response == 5){
    console.log("You pick number: " + colorNum[4] + " and it's " +colorNames[4]);
    document.write("You pick number: " + colorNum[4] + " and it's " +colorNames[4]);
}
else if (response == 6){
    console.log("You pick number: " + colorNum[5] + " and it's " +colorNames[5]);
    document.write("You pick number: " + colorNum[5] + " and it's " +colorNames[5]);
}
else{
    console.log("You didn't pick a number from 1 to 6");
}