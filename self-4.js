// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে 
// একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর
//  নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের 
// নাম (স্ট্রিং) রিটার্ন করতে হবে। 
function bestFriend(array) {
    let longestFrnd='';
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
        if (element.length > longestFrnd.length ) {
            longestFrnd = element;
        }
        
    }
    return longestFrnd;
    
}


const friend =['Alice', 'Jonathan', 'Emily', 'Alexander', 'Chris','TahiaMustofaTaha'];

const result = bestFriend(friend);

console.log(result);