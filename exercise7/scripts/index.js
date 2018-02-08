let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() +1 ;
onth = month < 10 ? '0' + month : month;
let day = currentDate.getDay();
day = day < 10 ? '0' + day : day;
let hours = currentDate.getHours();
hours = hours < 10 ? '0' + hours : hours;
let minutes = currentDate.getMinutes();
minutes = minutes < 10 ? '0' + minutes : minutes;
let seconds = currentDate.getSeconds();
seconds = seconds < 10 ? '0' + seconds : seconds;

console.log(`Date: ${year}-${month}-${day} Time: ${hours}:${minutes}:${seconds}`);

document.querySelector("div").innerHTML = `Date: ${year}-${month}-${day} Time: ${hours}:${minutes}:${seconds}`;