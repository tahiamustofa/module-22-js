const phones = [
    {name:'samsung', price:33000, camera:12 , storage:'12px' },
    {name:'oppo', price:54000, camera:12 , storage:'12px' },
    {name:'max10', price:12000, camera:12 , storage:'12px' },
    {name:'galaxyM10', price:22000, camera:12 , storage:'12px' },
    {name:'iphone', price:83000, camera:12 , storage:'12px' }
];

function getChippest(array) {
    let cheap = array[0];  // প্রথম ফোনটাকে ধরলাম সবচেয়ে সস্তা বলে
    for (let index = 1; index < array.length; index++) {  // লুপ ১ থেকে শুরু হবে কারণ ০ তম ফোন আগে ধরেছি
        const element = array[index];

        // যদি বর্তমানে ধরার চেয়ে অন্য কোনো ফোনের মূল্য কম হয়
        if (element.price < cheap.price) {
            cheap = element;
        }
    }
    return cheap; // সবচেয়ে সস্তা ফোন রিটার্ন করব
}

let buy = getChippest(phones);
console.log(buy);
