function paperRequirements(b1Quantity,b2Quantity,b3Quantity) {
let pageb1= 100;
let pageb2= 200;
let pageb3= 300;
 
let fst = 100* b1Quantity;
let snd = 200* b2Quantity;
let tnd = 300* b3Quantity;

let totalPaper= fst + snd + tnd;
return totalPaper;

}

let para = paperRequirements(2,1,1);
console.log(para);


function bestFriend(array) {
    let largest = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        // console.log(element);

        if (element.length>largest.length) {
            largest= element;
        }
    }
    return largest;
}

const fr = ['sajid','khalid bin walid','tahu','nuja','kuja'];
console.log(bestFriend(fr));