function yearL(year) {
    if (( year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0 )){
        console.log(year, 'is leapyear')
    }
    else{
        console.log(year, 'is not')
    }
}
let r= yearL(2024)
// console.log(r);