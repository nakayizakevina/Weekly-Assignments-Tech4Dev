//Created 4 accounts as ojects 

const account1 = {
    name: "Ketty",
    balance:1000000,
    currency:"UGX",
    type: "Savings",
 }

 const account2 = {
    name: "Kevina",
    balance:2000000,
    currency:"UGX",
    type: "Savings",
 }

 const account3 = {
    name: "Kevin",
    balance:3000000,
    currency:"UGX",
    type: "Checking",
 }

 const account4 = {
    name: "Kasule",
    balance:4000000,
    currency:"USD",
    type: "Checking",
 }

//Desposit money on account 1 & 2

 const Newdepost = 1000000;

 account1.balance += Newdepost;
 account2.balance += Newdepost;

 console.log(account1.balance);
 console.log(account2.balance);

 //Withdraw 500000 UGX from account 3 and 500000 USD from account 4

 const withDraw = 500000;
 
 account3.balance -= withDraw;
 account4.balance -= withDraw;

/* This if statement is cheching if the amount am
 trying to withdraw from a certain account is insufficient and if it is it will show a message
 that reads insufficient funds */
 
  if (account3.balance < withDraw && account4.balance < withDraw){
   console.log(`Withdrawal denied for ${account3.name} : insufficient funds`)
    console.log(`Withdrawal denied for ${account4.name} : insufficient funds`)
 } else{
       console.log(account3.balance);
       console.log(account4.balance)
 }

 //Transfer money between two accounts only if they have the same currency

const TransferMoney = 100000;
account2.balance -= 100000;
account3.balance += 100000;

// This is checking if account 2 and 3 are of the same currency type and as well if they are not of the same currency type

if(account2.currency == account3.currency && account2.currency === account3.currency){
   console.log(`Transfer of ${TransferMoney} done successfully to ${account3}`)
} else {
   console.log("Transfer failed: currency mismatch")

   }

   //Monthly maintenance and add interest to some accounts and as well dedecting some money from soem accounts.

const interestRate = 0.2; //0.2 equals to 20% 

if (account2.type == "Savings") {
    const interest = account2.balance * interestRate;
    account2.balance += interest;
    console.log(` ${account2.name} your new balance is ${account2.balance} ${account2.currency}`);
     console.log(` ${account1.name} your new balance is ${account1.balance} ${account1.currency}`);
      console.log(` ${account3.name} your new balance is ${account3.balance} ${account3.currency}`)
}  

const dectedFee = 0.5; 
if (account4.type == "Checking"){
   const dectution = account4.balance - dectedFee;
   account4.balance += dectution;
   console.log(` ${account4.name} your new balance is ${account4.balance} ${account4.currency}`);
}

if (account3.balance > account2.balance){
   console.log("Account3 has the highest balance")
}

//Comparing which account has the highest and lowest balance and am using nested objects and for...in loop 

const accounts = {
   account1:{balance:3480000} ,
   account2:{balance:2000000} ,
   account3:{balance:2600000} ,
   account4:{balance:6999999.5},
}

let highest = null;
let lowest = null;

for (let account in accounts){
   let balance = accounts[account].balance
   if (highest === null || balance > highest.balance){
    highest = { name: account, balance: balance };
    console.log(`${account} has the hightest balance ${balance}`);
}
else if(lowest === null || balance < lowest.balance){
   lowest = {name: account, balance: balance};
   console.log(`${account} has the lowest balance ${balance}`);
}
} 

//Account status check

for (let account in accounts){
   let balance = accounts[account].balance;
   
   if(balance > 0){
      console.log(`${account} is Active`);
   } else if(account === 0){
      console.log(`${account} is Empty`);
   } else{
      console.log(`${account} is Overdrawn`)
   }
}

//Transaction summary

console.log(`Dear ${account1.name} your account balance is ${account1.balance} ${account1.currency}`);
console.log(`Dear ${account2.name} your account balance is ${account2.balance} ${account2.currency}`);
console.log(`Dear ${account3.name} your account balance is ${account3.balance} ${account3.currency}`);
console.log(`Dear ${account4.name} your account balance is ${account4.balance} ${account4.currency}`);

//foreign currency account
const account5= {
    name: "Karen",
    balance:5000000,
    currency:"EUR",
    type: "Checking",
 }

const EURtransition = 100000;
exchangeRate = 1.1;
amountConverted = exchangeRate * EURtransition;


if(account4.currency !== account5.currency){
   //Convert amount to be transfered with the exchange rate
   let amountConverted = exchangeRate * EURtransition;

   //add the exchanged amount to the account
   account5.balance -= EURtransition;
 account4.balance += amountConverted;
   console.log(`Transfer complete: ${EURtransition} EUR → ${amountConverted} USD`);
}