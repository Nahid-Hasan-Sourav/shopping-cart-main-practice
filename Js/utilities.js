// According to jhankar sir videos,
function updateCaseNumber(isIncrease,inputFieldId){
    const numberField=document.getElementById(inputFieldId);
    const NumberFieldString=numberField.value; 
    const PreviousNumberField=parseInt(NumberFieldString);
    
    let newCaseNumber;
    
     if(isIncrease === true){
        newCaseNumber = PreviousNumberField + 1;
        console.log(newCaseNumber);
    }

    else{
        newCaseNumber=PreviousNumberField - 1;

    }

   numberField.value=newCaseNumber;
   return newCaseNumber;
}


function increasePrice(priceId,Quantity,phnPriece){
    
    const Price=document.getElementById(priceId);
    // const priceString=Price.innerText;  
    // console.log(typeof priceString);
    // const priceNumber = Number(priceString);
    const totalPrice=phnPriece*Quantity;
    Price.innerText=totalPrice;  
    return totalPrice; 

    
}
function SetAmount(setId,amount){
    const setDisplay=document.getElementById(setId);
    setDisplay.innerText=amount;
}

function calculateSubTotal(){
    const phnTotalPrice =document.getElementById("phn-price");   
    const  phnTotalPriceString=phnTotalPrice.innerText;  
    const currentPhnTotalPrice=Number(phnTotalPriceString);
   

    const caseTotalPrice = document.getElementById("case-price");
    const caseTotalPriceString=caseTotalPrice.innerText;
    const caseTotalPriceNumber = Number(caseTotalPriceString);

    const subTotal=currentPhnTotalPrice+caseTotalPriceNumber;
    SetAmount("subtotal-amount",subTotal)
    console.log("subtotal: " + subTotal);

    // TAX
    const taxAmountString=(subTotal*0.1).toFixed(3);
    const taxAmountNumber=Number(taxAmountString);
    SetAmount("tax-amount",taxAmountNumber);
    console.log(" taxAmountNumber: " +  taxAmountNumber);

    const total=subTotal+taxAmountNumber;
    SetAmount("total-amount",total);

}

