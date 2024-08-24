function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'plzz type a number';
    }
    return num1 + num2;
}

const result = add(12,45);
// console.log(result);

function multi(num1, num2) {
    console.log(num1, num2);
    return num1 * num2;
}

const multil =multi(12,45);
console.log(multil);