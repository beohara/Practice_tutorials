//nested loops and conditionals 

/*let a = prompt("enter number b/w 1-10");
if (a < 10) {

    if (a >= 5) {
        console.log("I am more than 5");
    }

    else {
        console.log("I am less than 5");
    }
}*/

/*if ("") {
    console.log("Truthy");
}
else {
    console.log("falsy");
}*/

/*const password = prompt("Enter your password");
//password should have greater length than 6 digits and should not have any space 
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("valid password");
}

else {
    console.log("Incorrect format for password");
}*/

/*let age = prompt("Enter age - ");
if (age < 5 || age >= 60) {
    console.log("Free!");
}
else if (age >= 5 && age < 10) {
    console.log("10 euro");
}
else if (age >= 10 && age < 60) {
    console.log("20 euro");
}*/

// && has predence over ||

let day = Math.floor(Math.random() * 7 + 1);
switch (day) {
    case 1:
        console.log("I hate mondays!");
        break;
    case 2:
        console.log("Tuesdays are fine");
        break;
    case 3:
        console.log("Wednesday halfway there!");
        break;
    case 4:
        console.log("Thursday weekend is almost here");
        break;
    case 5:
        console.log("Friday Finally the last working day");
        break;
    case 6:
        console.log("Saturday yay the weekend");
        break;
    case 7:
        console.log("Sunday the day of rest");
        break;
    default:
        console.log("I don't know what day is it")
}