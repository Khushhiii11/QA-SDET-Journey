const transactions = [
    {
        transactionId: "TXN101",
        customer: {
            name: "Aarav",
            city: "Mumbai"
        },
        amount: 500,
        paymentMethod: "UPI",
        status: "Success"
    },
    {
        transactionId: "TXN102",
        customer: {
            name: "Priya",
            city: "Pune"
        },
        amount: 15000,
        paymentMethod: "Card",
        status: "Success"
    },
    {
        transactionId: "TXN103",
        customer: {
            name: "Rahul",
            city: "Mumbai"
        },
        amount: -200,
        paymentMethod: "UPI",
        status: "Failed"
    },
    {
        transactionId: "TXN104",
        customer: {
            name: "Sneha",
            city: "Delhi"
        },
        amount: 2500,
        paymentMethod: "Card",
        status: "Success"
    },
    {
        transactionId: "TXN105",
        customer: {
            name: "Amit",
            city: "Mumbai"
        },
        amount: 0,
        paymentMethod: "NetBanking",
        status: "Failed"
    },
    {
        transactionId: "TXN106",
        customer: {
            name: "Neha",
            city: "Pune"
        },
        amount: 800,
        paymentMethod: "UPI",
        status: "Success"
    }
];
transactions.forEach((transaction)=>{
    console.log("Transaction",transaction.transactionId);
    console.log("Customer",transaction.customer.name);
    console.log("Amount",transaction.amount);
    console.log("Payment Method",transaction.paymentMethod);
    console.log("Status",transaction.status);
});
const filter = transactions.filter((transaction)=>transaction.amount>0 && transaction.amount<=10000 && transaction.status=="Success")
console.log("valid transaction ", filter);
const filter1 = transactions.filter((transaction)=> transaction.status=="Failed")
console.log("Invalid transaction ", filter1);
const firstSuccessfulTransaction = transactions.find((transaction)=> transaction.status=="Success")
console.log("valid transaction ", firstSuccessfulTransaction);
const highValueTransactions = transactions.filter((transaction)=>transaction.amount>2000)
console.log("valid transaction ", highValueTransactions);
console.log("Total Transaction",transactions.length);
let successfulCount = 0;
let failedCount = 0;
let totalSuccessfulAmount = 0;

for (const transaction of transactions) {
    if (transaction.status === "Success") {
        successfulCount++;
        totalSuccessfulAmount += transaction.amount;
    } else if (transaction.status === "Failed") {
        failedCount++;
    }
}

let totalTransactions = transactions.length;
console.log("Total transaction" , totalTransactions)
let averageSuccessfulAmount = totalSuccessfulAmount / successfulCount;
console.log("average",averageSuccessfulAmount)