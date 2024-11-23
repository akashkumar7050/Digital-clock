let hours = document.querySelector("#hours")
let minutes = document.querySelector("#minutes ")
let seconds = document.querySelector("#seconds ")
let AMPM = document.querySelector("#ampm")

setInterval(()=>{

const newDate = new Date()
let hour = newDate.getHours()
const minute = newDate.getMinutes()
const second = newDate.getSeconds()
let ampm = hour >=12 ? "PM" : "AM";
hour = hour % 12;
hour = hour?hour:12;
hours.innerText=hour<10?"0"+hour:hour
minutes.innerText=minute<10?"0"+minute:minute
seconds.innerText=second<10?"0"+second:second
AMPM.innerText = ampm

},1000)