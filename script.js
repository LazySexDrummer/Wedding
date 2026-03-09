const weddingDate = new Date("May 23, 2026 13:45:00").getTime();

setInterval(function(){

const now = new Date().getTime();

const distance = weddingDate - now;

const days = Math.floor(distance / (1000*60*60*24));
const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));

document.getElementById("countdown").innerHTML =
days + " дней " + hours + " часов " + minutes + " минут";

},1000);