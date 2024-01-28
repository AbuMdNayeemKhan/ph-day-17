/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let ticketPrice = 10;
let age = 40;
let isStudent = true;

if(age < 10){
    console.log("Yahoo! you'r free.");
} else if (isStudent == true){
    console.log("You have 50% dicount. Please give me: "+ ticketPrice / 100 * 50 +"taka");
} else if (age <= 60){
    console.log("You have 15% dicount. Please give me: "+ ticketPrice / 100 * 15 +"taka");
} else{
    console.log("Please give me: "+ ticketPrice / 100 * 15 +"taka");
}