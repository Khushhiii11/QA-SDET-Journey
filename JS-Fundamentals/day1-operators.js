const productPrice=2000;
const dis = 200;

console.log("Payment Calculation : ", productPrice - dis)


const expectedAmount = 1000;
const actualAmount = "1000";

console.log(expectedAmount==actualAmount)
console.log(expectedAmount===actualAmount)


const login = {
    username : "khushi",
    password:"test123",
    isAccountActive:true
};

const islogin =
    login.username == "khushi" &&
    login.password == "test123"  &&
    login.isAccountActive==true;

console.log("Login Succecced:", islogin);

const paymentAmount = 15000
const dailyLimit = 10000

const checkLimit = 
    paymentAmount >0 && paymentAmount <= dailyLimit;
console.log("Result " , checkLimit)

const pm = "UPI"
const check = pm=="UPI" || pm=="Cards";
console.log(check)
