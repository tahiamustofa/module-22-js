//A factorial is a function that multipales a number by every number bellow it till 1



function factorial(n) {
    if(n === 0 || n === 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}


let r = factorial(7);
console.log(r);