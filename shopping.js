const shopping=[
    {name:'shoe' ,price:1200},
    {name:'shirt' ,price:2200},
    {name:'pant' ,price:3700},
    {name:'belt' ,price:600}
];

function totalCost (array) {
    let sum=0;
   for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
     sum= sum + element.price;

   }
    return sum;
}

let total = totalCost(shopping);
 console.log('total',total); 