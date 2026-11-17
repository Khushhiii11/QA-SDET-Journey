const customer = {
    name : "Khushi",
    age : 22,
    isRegistered : true,
    email:"khushi@nimbbl.biz"
}

console.log(customer.name);
console.log(customer.age);
console.log(customer.isRegistered);
console.log(customer.email);


const PaymentMethods=["UPI" , "Cards" , "Wallets ", "Credit Card" , "Debit Card"];

console.log(PaymentMethods[1]);
console.log(PaymentMethods[3]);


let transactionId = "TXN202";
let amount = 1500;
let transactionSuccessful = true;
let refundId = null;
let transactionRemarks;


console.log("Transaction ID:",transactionId);
console.log("Amount:",amount);
console.log("Status:", transactionSuccessful);
console.log("Verified:", transactionRemarks);

console.log(typeof transactionId);
console.log(typeof amount);
console.log(typeof transactionSuccessful);
console.log(typeof transactionRemarks);


const expectedStatus = "Successful";
const actualStatus = "Successful";

console.log(expectedStatus)
console.log(actualStatus)
console.log(typeof expectedStatus)
console.log(typeof actualStatus)


