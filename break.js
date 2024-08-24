function breakArray(array) {
    let newArray=[];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element<0) {
           break; 
        }
        else{
          newArray.push(element);
        }
    }
    return newArray;
}
let br= [2,4,60,70,80,90,-40,90,80,77,8,9,6]
console.log(breakArray(br));