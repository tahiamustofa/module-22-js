const friends=[20,21,22,23,24,25,26,27,30];

const portion = friends.splice(2,5,33,44,55555,999999999999);

console.log(portion);

console.log( 'main array',friends);