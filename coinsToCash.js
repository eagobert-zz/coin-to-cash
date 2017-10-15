//Define object named "piggyBank"
let piggyBank = {

    //define keys of object "piggyBank"
    quarters: 500,
    nickels: 60,
    dimes: 100,
    pennies: 2000

}

//Each change category converted to dollars

let convQtrs = piggyBank.quarters / 4;
let convNick = piggyBank.nickels / 20;
let convDimes = piggyBank.dimes / 10;
let convPenn = piggyBank.pennies / 100;

//Testing to view if calculation works
console.log(convQtrs);
console.log(convNick);
console.log(convDimes);
console.log(convPenn);

//Define variable called "dollarAmount" to add the total of all coins
let dollarAmount = convQtrs + convNick + convDimes + convPenn;

//Log to console the dollar amount
console.log(dollarAmount);

//Log to console the dollar amount in US dollars with decimal point
console.log(dollarAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));