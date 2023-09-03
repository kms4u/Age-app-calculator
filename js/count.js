const date = '2019-09-29'

let currentDate = Date.parse(new Date());

let days = (currentDate - Date.parse(date))/86400000
let months = (currentDate - Date.parse(date))/2592000000
let years = (currentDate - Date.parse(date))/31536000000;



console.log(years)
console.log(months)
console.log(days)


let days2 = (currentDate - Date.parse(date))/86400000
let months2 = (933252029426687 - Date.parse(date))/2592000000