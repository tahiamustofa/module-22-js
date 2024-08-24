// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে
//  console log
//  করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড 
// করে ফেলো 
let array=[88,44,45,45,33,89,90,87,86,80]
let grat80=[];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
    if (element>=80) {
     
        grat80.push(element); 
    }
    else{

    }
}
console.log(grat80);