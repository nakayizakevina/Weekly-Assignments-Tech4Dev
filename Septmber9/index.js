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



 const Newdepost = 1000000;

 account1.balance += Newdepost;
 account2.balance += Newdepost;

 console.log(account1.balance);
 console.log(account2.balance);

 const withDraw = 500000;
 
 account3.balance -= withDraw;
 account4.balance -= withDraw;

;

 if (account3.balance < withDraw && account4.balance < withDraw){
   console.log(`Withdrawal denied for ${account3.name} : insufficient funds`)
    console.log(`Withdrawal denied for ${account4.name} : insufficient funds`)
 } else{
       console.log(account3.balance);
       console.log(account4.balance)
 }

const TransferMoney = 100000;
account2.balance -= 100000;
account3.balance += 100000;

if(account2.currency == account3.currency && account2.currency === account3.currency){
   console.log(`Transfer of ${TransferMoney} done successfully to ${account3}`)
} else {
   console.log("Transfer failed: currency mismatch")

   }


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

//Account status check

const accounts = {
   account1:{balance:3480000} ,
   account2:{balance:2000000} ,
   account3:{balance:2600000} ,
   account4:{balance:6999999.5},
}

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