const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#checkBtn");
const errorMsg = document.querySelector("#error-message");
const numberofNotes = document.querySelectorAll(".numberofNotes")

const availableNotes = [2000,500,100,50,20,10,5,1];

checkBtn.addEventListener('click',  function validateBillandCashAmount() {

    hideMessage();

    // The JavaScript Number type is a double-precision 64-bit binary format IEEE 754 value, like double in Java.
    if(Number(billAmount.value) > 0){
        
        if(Number(cashGiven.value) >= Number(billAmount.value)){
           const differenceAmount = Number(cashGiven.value) - Number(billAmount.value);
           CalculateChange(differenceAmount);
        }
    
        else{
            showMessage("Cash given not valid \nHint : Cash given should be greater than or equal to bill amount.");
        }
    }

    else{
        showMessage("Invalid bill amount.");
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

function CalculateChange(differenceAmount){
    
    for(let i=0; i<availableNotes.length;i++){

        const nosofNotes = Math.trunc(
            differenceAmount / availableNotes[i]
        );
        
        differenceAmount %= availableNotes[i];
        numberofNotes[i].innerText = nosofNotes;

    }
}



