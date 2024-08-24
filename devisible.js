for (let index = 1; index <= 50; index++) {
    

    if (index % 3 === 0 && index % 5 === 0) {
        console.log('foobar'); 
    } 
    else if(index % 3 === 0) {
        console.log('foo');
    }
    else if (index % 5 === 0) {
        console.log('bar'); 
    } 
    else{
        console.log(index);
    }
}