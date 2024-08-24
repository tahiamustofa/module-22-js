function removeDuplicate(array) {
let uniqe = [ ];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        //  console.log(element);

        if (uniqe.includes(element) === false) {
            uniqe.push(element);
        }
        
    }
    return uniqe;
}

const names=['abul','babul','tabul','babul','tabul','kabul','abul','mokbul'];
const result =removeDuplicate(names);
console.log(result);