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

 const WithDraw = 500000;
 
 account3.balance -= WithDraw;
 account4.balance -= WithDraw;

 console.log(account3.balance);
 console.log(account4.balance)