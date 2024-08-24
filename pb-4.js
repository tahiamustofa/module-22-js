/*
৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর 
মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক 
করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। 
তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 
*/

let a= 20;
let b= 10;

if (a >= b) {
    console.log('a boro');
} else {
    console.log('b boro');
}


// দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার
let num1 = 10;
let num2 = 20;

// ১. তুলনা: num1 < num2
console.log(num1 < num2); // true

// ২. তুলনা: num1 > num2
console.log(num1 > num2); // false

// ৩. তুলনা: num1 == num2
console.log(num1 == num2); // false

// ৪. তুলনা: num1 != num2
console.log(num1 != num2); // true

// ৫. তুলনা: num1 <= num2
console.log(num1 <= num2); // true

// ৬. তুলনা: num1 >= num2
console.log(num1 >= num2); // false
