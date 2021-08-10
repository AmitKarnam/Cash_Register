const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#checkBtn");
const errorMsg = document.querySelector("#error-message");

checkBtn.addEventListener('click',  function validateBillandCashAmount() {

    hideMessage();

    // The JavaScript Number type is a double-precision 64-bit binary format IEEE 754 value, like double in Java.
    if(Number(billAmount.value) > 0){
        console.log("Bill amount is equal to : " + Number(billAmount.value))

        if(Number(cashGiven.value) >= Number(billAmount.value)){
            console.log("Cash given is : " + Number(cashGiven.value))
        }
    
        else{
            showMessage("Please provide sufficcient amount.");
        }
    }

    else{
        showMessage("Bill amount should be positive and greater than 0");
    }
})

function hideMessage(){
    errorMsg.style.display = "none";
}

function showMessage(msg){
    errorMsg.style.display = "block";
    errorMsg.style.color = "red";
    errorMsg.innerText = msg;
}



