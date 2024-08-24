const shopping=[
    {name:'shoe' ,price:1200, Quantity:2 },
    {name:'shirt' ,price:2200, Quantity:3},
    {name:'pant' ,price:3700, Quantity:4},
    {name:'belt' ,price:600, Quantity:6}
];

function totalCost (array) {
    let sum=0;
   for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    let withQuantity = element.price * element.Quantity;
     sum= sum + withQuantity;

   }
    return sum;
}

let total = totalCost(shopping);
 console.log('total',total); 