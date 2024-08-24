// first100 = 100;
// 101-200 = 90;
// 200+ = 70;

function ticketPrice(ticketQuantity) {
   const first100rate = 100;
   const sec100rate = 90;
   const restRate = 70; 
   if (ticketQuantity<=100) {
    const price = first100rate * ticketQuantity;
    return price;
   }
   else if (ticketQuantity<=200) {
    const first100price = first100rate * 100;
    const restTicketQuantity = ticketQuantity- 100;
     const restTicketPriceforsec = restTicketQuantity * sec100rate;
     const total = first100price + restTicketPriceforsec;
     return total;

   } else {
    const first100price = first100rate * 100;
    const sec100price =  sec100rate * 100;

    const restQuantityforLast = ticketQuantity - 200;

    const restLastTicketPrice = restQuantityforLast * restRate;

    const restTotal = first100price + sec100price + restLastTicketPrice; 

    return restTotal;
   }
}

const totalP= ticketPrice(120);
console.log(totalP);


