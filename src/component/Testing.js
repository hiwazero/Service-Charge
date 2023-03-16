// get the current date and time
var now = new Date();

console.log(now.toLocaleString()) // USE THIS FORMAT
// const test = Wed Mar 15 2023 23:06:58 GMT+0800 (Singapore Standard Time) + ""
const test = "3/15/2023, 11:08:39 PM"
const test2 = new Date("3/15/2023, 11:08:39 PM")
console.log(test2) // 3/15/2023, 11:08:39 PM
// console.log(date)

// create a new Date object for tomorrow at the same time
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1); // add one day to the current date
tomorrow.setHours(test2.getHours()); // set the hours to the current hour
tomorrow.setMinutes(test2.getMinutes()); // set the minutes to the current minute
tomorrow.setSeconds(test2.getSeconds()); // set the seconds to the current second

const date = now.getDate() + "" //15
const time = now.getHours() + "" //23
const minutes = now.getMinutes() + "" //3
const seconds = now.getSeconds() + "" //26

// get the timestamp for tomorrow at the same time
var tomorrowTimestamp = tomorrow.getTime();

// compare the two timestamps
if (test2 < tomorrowTimestamp) {
  console.log("It is before tomorrow at " + tomorrow.toLocaleTimeString() + ".");
} else if (test2 > tomorrowTimestamp) {
  console.log("It is after tomorrow at " + tomorrow.toLocaleTimeString() + ".");
} else {
  console.log("It is exactly tomorrow at " + tomorrow.toLocaleTimeString() + ".");
}

// var now = new Date()
// console.log(now.getHours())
