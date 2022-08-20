
document.getElementById("btn-case-plus").addEventListener("click",function(){
    let casePlus=updateCaseNumber(true,"case-number-Field");
   let caseTotalPrice= increasePrice("case-price",casePlus,59);
   calculateSubTotal()
})

document.getElementById("btn-case-minus").addEventListener("click",function(){
    let caseMinus=updateCaseNumber('',"case-number-Field");
    let caseTotalPrice= increasePrice("case-price",caseMinus,59);
    calculateSubTotal()
})  