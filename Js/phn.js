// document.getElementById("btn-phn-plus").addEventListener("click",function(e){
//     console.log("Starting");
//     const phnNumberField=document.getElementById("phn-number-field");
//     console.log(phnNumberField)
//     const phnNumberFieldString=phnNumberField.value;
//     const phnNUmberFieldNumber=parseInt( phnNumberFieldString);
    
//     console.log(phnNumberField.value=phnNUmberFieldNumber+1)
// })


// function plusBtnIncrease(fieldId){
//     let count=1;
//     const numberField=document.getElementById(fieldId);
//     const previousNumberFieldSteing=numberField.value;
//     const newNumberFieldNumber=Number(previousNumberFieldSteing);
//     const increaseNewNumber=count++;
//     return  numberField.value=newNumberFieldNumber+1;
   

// }


// function minusBtnDecrease(fieldId){
    
//     const numberField=document.getElementById(fieldId);
//     const previousNumberFieldSteing=numberField.value;
//     const newNumberFieldNumber=Number(previousNumberFieldSteing); 
//     if(newNumberFieldNumber<=0){
//         return alert("Please press Plus icon");
//     } 
//    else{
//     return  numberField.value=newNumberFieldNumber-1;
//    }
   

// }




document.getElementById("btn-phn-plus").addEventListener("click",function(){
    // console.log("Starting");
    let phnPlus=updateCaseNumber(true,"phn-number-field");
    // console.log(phnPlus);
    increasePrice("phn-price",phnPlus,1219);
    calculateSubTotal()
    
   
})

document.getElementById("btn-phn-minus").addEventListener("click",function(){
    let phnMinus=updateCaseNumber('',"phn-number-field");
    let totalPrice= increasePrice("phn-price", phnMinus,1219);
    calculateSubTotal()
})  

