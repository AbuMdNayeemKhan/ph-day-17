/***
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad
Note: 
use nested if-else-if-else
*/

// without nasting
let myResult = 88;
let frientsResult = 99;
if(myResult > 80 && frientsResult > 80){
    console.log("go for a lunch");
} else if (myResult > 80 && frientsResult > 60){
    console.log("Good Luck");
} else if (myResult > 80 && frientsResult > 40){
    console.log("message unsend");
} else if (myResult > 80 && frientsResult <= 40){
    console.log('ne block kha.');
} else{
    console.log("I'm crying");
}

if (myResult > 80) {
    console.log();
    if (frientsResult > 80) {
        console.log("go for a lunch");
    } else if (frientsResult > 60) {
        console.log("Good Luck");
    } else if (frientsResult > 40) {
        console.log("unseen message");
    } else if (frientsResult <= 40) {
        console.log('ne block kha.');
    }
} else {
    console.log("I'm crying");
}