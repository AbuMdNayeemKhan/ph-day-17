/***
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

const burgerPrice = 700;
const cokePrice = 30;

if (burgerPrice > 500) {
  console.log("your total cost is: "+burgerPrice+". and you won a coke free.");
} else {
  console.log("Burger price is: "+burgerPrice+". cock Price is: "+cokePrice+". Your total price is: "+(burgerPrice + cokePrice));
}
