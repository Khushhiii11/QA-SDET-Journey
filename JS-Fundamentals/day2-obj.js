const user = {
name : "Khushi",
age:23,
city : "Mumbai",
IsLoggedin:true
};

console.log(user.name , user.age,user.city,user.IsLoggedin)


const payment = {
    transactionId: "PAY101",
    amount: 500,
    status: "Pending"
};

payment.amount=1500;
payment.status="Success";
payment.paymentMethod="UPI";

console.log(payment)


const user1 = {
    name: "Khushi",
    email: "khushi@example.com",
    age: 22,
    city: "Mumbai"
};

delete user1.email;
console.log(user1);

const transaction = {
    transactionId: "TXN501",
    amount: 2500,
    status: "Success",
    paymentMethod: "Card"
};

if (transaction.amount>0 ){
    console.log("Valid AMount");
}
if (transaction.status=="Success"){
    console.log("Payment Successfull");

}
if (transaction.paymentMethod=="Card"|| "UPI"){
 console.log("Supported Payment Methods")
}


const employee = {
    name: "Khushi",
    job: {
        role: "QA Engineer",
        department: "Engineering",
        experience: 1
    }
};

console.log(employee.name,employee.job.role,employee.job.department,employee.job.experience);
employee.job.role="SDET";
employee.job.experience=2;
employee.job.salary=550000;
console.log(employee);


const response = {
    transactionId: "TXN101",
    status: "Success",
    customer: {
        name: "Khushi",
        city: "Mumbai"
    },
    payment: {
        amount: 2500,
        method: "UPI"
    }
};


console.log(response.transactionId,response.customer.name,response.customer.city,response.payment.amount,response.payment.method);

const testCases = [
    { name: "Login", status: "Passed" },
    { name: "Payment", status: "Failed" },
    { name: "Refund", status: "Passed" },
    { name: "Logout", status: "Failed" }
];
testCases.forEach((test)=>{
console.log(test.name);
})
const fil=testCases.filter((Case)=>Case.status=="Failed");
console.log(fil);
const filt=testCases.find((Case)=>Case.status=="Failed");
console.log(filt);

