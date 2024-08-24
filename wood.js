// chair= 3 Cft ;
// table - 10
// bed-50


function woodRequired(chairQuantity, tableQuantity, bedQuantity) {
 let chairP= 3;
 let tableP= 10;
 let bedP= 50;

 let chairWood = chairP * chairQuantity;
 let tableWood = tableP * tableQuantity;
 let bedWood = bedP * bedQuantity;

 let total = chairWood + tableWood + bedWood;

 return total;
    
}

let totawood= woodRequired(1,1,1);
console.log(totawood);