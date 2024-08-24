// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। 
// সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 
array=[-0,-9,-8,-7,1,2,3,4,5,6]
let sum=[ ];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum.push(element)
// console.log(element);
}
console.log(sum)