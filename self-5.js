// ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে।
//  তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। 
//  অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ
//   সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। 
// সেগুলা রিটার্ন করে দিবে। 

// function getPositiveNumbers(numbers) {
//     let positiveNumbers = [];
    
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] >= 0) {
//             positiveNumbers.push(numbers[i]);
//         } else {
//             break;
//         }
//     }
    
//     return positiveNumbers;
// }

// const array = [3, 7, 0, 12, 5, -2, 10, 15];
// const result = getPositiveNumbers(array);
// console.log(result);  // Output: [3, 7, 0, 12, 5]


function getPossitive(array) {
    // let getArray=[];
    let possi=[];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element>=0) {
         possi.push(element);
       
          
        } else {
           break; 
        }
    }
 return possi;
}

let arrayGiven=[0,1,2,3,4,5,9,80,-9,8,6,7,8];
let possitiveNumber = getPossitive(arrayGiven);
console.log(possitiveNumber);