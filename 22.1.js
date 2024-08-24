const country = 'Bangladesh'; 
const age= 10;
const isIndepandent = true;

const student ={ id:170080300079, name:'agun', batch:8};
const friends=[20,21,22,23,24,25,26];
function add(num1,num2) {
    return num1+num2;
}

// console.log(typeof country);
// console.log(typeof isIndepandent);
// console.log(typeof student);
// console.log(typeof age);

// check array formula
// console.log(Array.isArray(friends));
// console.log(typeof add);

console.log(friends.includes(22));
console.log(friends.includes(12));

if (friends.indexOf(2)!== -1)   {
    console.log('we have the element');
}

// concat
const newF =[1,2,3];
const allFrnd = newF.concat(friends);
console.log(allFrnd);