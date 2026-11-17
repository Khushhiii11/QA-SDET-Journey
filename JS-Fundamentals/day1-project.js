const transaction = {
    transactionId: "TXN101",
    customerName: "Khushi",
    paymentAmount: 5000,
    dailyLimit: 10000,
    paymentMethod: "UPI",
    isLoggedIn: true
};

console.log("Transaction Id = ",transaction.transactionId);
console.log("Customer Name = ", transaction.customerName);

if (transaction.isLoggedIn){
    console.log("User is Logged in");
}
else{
    console.log("User is not yet logged in ");
}

const check = transaction.paymentAmount>0 && transaction.paymentAmount<=transaction.dailyLimit && (transaction.paymentMethod =="UPI")||"Card" ;
if (check){
    console.log("Payment Accepted");
}
else{
    console.log("Payment is not accepted ")
}

