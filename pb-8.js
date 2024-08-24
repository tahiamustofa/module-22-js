// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের
//  করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা
//   উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 


let array=[1,2,3,4,5];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
       
        // console.log(element);
        
        
        array[3]= 100;
       

    }
    const numOfEle = array.length;
    console.log(numOfEle);

    console.log(array);
   
    let plus = array.push(200);
    let plus2 = array.push(90000);

    console.log(array);


    let minus = array.splice(4,1);
    console.log(array);
