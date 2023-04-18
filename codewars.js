// ------ 1 -------
let monthNum = 0

do {
    monthNum = Number(prompt("enter a month number between 1 and 12"))
} while (monthNum < 1 || monthNum > 12) 

switch(monthNum) {
    case 2:
        console.log(`Month ${monthNum} in the year has 28 days`)
        break
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(`Month ${monthNum} in the year has 31 days`)
    default:
        console.log(`Month ${monthNum} in the year has 30 days`)

}



// ------- 2 -------
let hour = (+prompt("Enter an hour between 0 and 23"))
let minute = (+prompt("Enter an minute between 0 and 59"))
let second = (+prompt("Enter an second between 0 and 59")) + 1

if(second === 60) {
    second = 0
    minute++
    if(minute === 60) {
        minute = 0
        hour++
        if(hour === 24) {
            hour = 0
            minute = 0
            second = 0
        }
    }
}

console.log(`${hour}h${minute}m${second}s`)