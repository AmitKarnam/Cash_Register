const billAmount = document.querySelector("#bill-amount");

const nextBtn  =  document.querySelector("#nextBtn");
nextBtn.addEventListener('click',() => {

/* Number type is like double in Java or C# */
    if(Number(billAmount.value) > 0){
        console.log("Next button clicked.");
        console.log("Bill amount is equal to : " + Number(billAmount.value))
    }

    else{
        alert("Bill amount should be greater than 0.");
    }
})

const cashGiven = document.querySelector("#cash-given");

const checkBtn = document.querySelector("#checkBtn");
checkBtn.addEventListener('click', () => {
    
    if(Number(cashGiven.value) >= Number(billAmount.value)){
        console.log("Check button pressed!");
        console.log("Cash given is : " + Number(cashGiven.value))
    }

    else{
        alert("Please provide sufficcient amount.")
    }

})



