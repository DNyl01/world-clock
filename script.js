
setInterval (updateClock, 1000);

function updateClock(){

let cabindaEl = document.querySelector("#cabinda");
let cabindaDateEl = cabindaEl.querySelector(".date");
let cabindaTimeEl = cabindaEl.querySelector(".time");
cabindaDateEl.innerHTML = moment().format("DD/MM/YYYY");
cabindaTimeEl.innerHTML = moment().format("hh:mm:ss A");


let coimbraEl = document.querySelector("#coimbra");
let coimbraDatel = coimbraEl.querySelector(".date");
let coimbraTimeEl = coimbraEl.querySelector(".time");
coimbraDatel.innerHTML = moment().format("DD/MM/YYYY");
coimbraTimeEl.innerHTML = moment().format("hh:mm:ss A");



let londresEl = document.querySelector("#londres");
let londresDateEl = londresEl.querySelector(".date");
let londresTimeEl = londresEl.querySelector(".time");
londresDateEl.innerHTML = moment().format("DD/MM/YYYY");
londresTimeEl.innerHTML = moment().format("hh:mm:ss A");


}