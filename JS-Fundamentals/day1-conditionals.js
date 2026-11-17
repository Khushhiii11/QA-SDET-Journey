const age = 17;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}


const paymentStatus = "Pending";

if (paymentStatus === "Successful"){
    console.log("Payment is completed");
}
else if (paymentStatus ==="Pending"){
    console.log("Payment is Pending");
}
else{
    console.log("Payment is failed");
}


const paymentAmount = 15000;
const dailyLimit = 10000;
if (paymentAmount<=0){
    console.log("Invalid Amount");
}
else if (paymentAmount>dailyLimit){
    console.log("Limit Exceed")
}
else{
    console.log("Payment Accepted")
}

const username = "khushi";
const password = "test123";
const isAccountActive = true;

if(password==="test123"&& username==="khushi"){
    console.log("Valid Credentials");
    if (isAccountActive){
        console.log("Login Successful");
    }
    else{
        console.log("Account is inactive")
    }
}

else{
    console.log("Invalid Credentials")
}


const expectedResult = "Success";
const actualResult = "Failed";

if (expectedResult===actualResult){
    console.log("Test Passed");
}
else{
    console.log("Test Failed");
}