for (let i = 1; i<=10; i++){
    console.log(i);
}

for (let i = 10; i>0; i--){
    console.log(i);
}

for (let i = 1;i<=20;i++){
    if(i%2==0){
    console.log(i);
    }
    
}

for (let i = 1; i<=5; i++){
    console.log("Executing Payment Test ",i);
}

const n = 5;
for (let i = 1 ; i<=10 ; i++){
console.log( n," * ",i,"=",n*i);
}

for (let i = 1;i<=30;i++){
    if(i%3==0 && i % 5 ==0){
        console.log(i);
    }
}


var i = 1;
while (i<=5){
    console.log(i);
    i++;
}


var i = 10;
while (i>=0){
    console.log(i);
    i--;
}


let attempts = 0;
let paymentSuccessful = false;
while(paymentSuccessful!=false && attempts<5){
    console.log("Payment Panding");
    attempts++;
}


const testCases = ["Login", "Payment", "Refund", "Logout"];

testCases.forEach((cases)=>{
    console.log(cases);
})

const paymentAmounts = [500, 0, 1200, -50, 2500, -100];
paymentAmounts.forEach((amount)=>{
    if (amount<0){
        console.log(amount);
    }
})

const payments = [500, 1200, 0, -200, 15000, 2500];
payments.forEach((payment=>{
    console.log(payment);
    console.log(payment>1000);
    if (payment>0 && (payment<=10000)){
        console.log("Valid Payment " , payment);
    }
    else{
        console.log("Invalid Payment ",payment)
    }
}))

const prices = [100, 250, 500, 1000];

const updatedprices = prices.map((price) => price + 50 );
console.log(updatedprices);

const paymentIds = [101, 102, 103, 104];
const strings = paymentIds.map((str)=> "Pay-" + str);
console.log(strings)

const amounts = [500, 0, -100, 2000];
const obj=amounts.map((amt)=>{
    amounts.forEach((amount)=>{
        if(amount>0 && amount<=1000){
            console.log("amount : " , amounts , "isValid : " , amount);
        }
    })
})


const pay = [500, 800, 2500, 1000, 5000,500, 0, 1200, -50, 2500, -100];
const update = pay.filter((payment)=>payment>1000 || payment<0 );
const positive=pay.filter((pos)=>pos>0 && pos<=10000);
console.log (update);
console.log(positive);


const testcases = [
    { name: "Login", status: "Passed" },
    { name: "Payment", status: "Failed" },
    { name: "Refund", status: "Passed" },
    { name: "Logout", status: "Failed" }
];

const newCase = testcases.filter((newcases)=>newcases.status=="Failed");
console.log(newCase)


const pa = [500, 800, 1200, 2500, 5000];
const paym = pa.find((payme)=>payme>1000);
console.log(paym)


const paymentids = [101, 102, 103, 104, 105];
const id = paymentids.find((ids)=>ids==103);
console.log(id);

const testCase = [
    { name: "Login", status: "Passed" },
    { name: "Payment", status: "Failed" },
    { name: "Refund", status: "Passed" },
    { name: "Logout", status: "Failed" }
];
const Case = testCase.find((c)=>c.status=="Failed");
console.log(Case)


const ments = [500, 0, -200, 1500, 15000, 2500];
const amo = ments.find((unts)=>unts>0 && unts<=10000);
console.log(amo)

const test = ["Login", "Payment", "Refund", "Logout"];
test.forEach((t)=>{
  console.log("Test case : ",t);

})


for (let i = 0 ; i <=10 ; i++){
    if (i==8){
        break;
    }
console.log(i);
}


for (let i = 0 ; i <=10 ; i++){
    if (i==5){
        continue;
    }
console.log(i);
}

const payment = [500, 0, -200, 1500, 15000, 2500, 800];
for (let i = 0 ;i<=payment.length;i++){
    if (payment<=0||payment>10000){
        continue;
        
    }
    console.log("Valid Payment ",i)
}
