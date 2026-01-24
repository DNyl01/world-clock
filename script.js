
setInterval (updateClock, 1000);

function updateClock(){

let cabindaEl = document.querySelector("#cabinda");
if (cabindaEl){
let cabindaDateEl = cabindaEl.querySelector(".date");
let cabindaTimeEl = cabindaEl.querySelector(".time");
cabindaDateEl.innerHTML = moment().tz("Africa/Luanda").format("DD/MM/YYYY");
    cabindaTimeEl.innerHTML = moment().tz("Africa/Luanda").format("hh:mm:ss A");
}

let coimbraEl = document.querySelector("#coimbra");
if (coimbraEl){
let coimbraDatel = coimbraEl.querySelector(".date");
let coimbraTimeEl = coimbraEl.querySelector(".time");
coimbraDatel.innerHTML = moment().tz("Europe/Lisbon").format("DD/MM/YYYY");
    coimbraTimeEl.innerHTML = moment().tz("Europe/Lisbon").format("hh:mm:ss A");
}


let londresEl = document.querySelector("#londres");
if (londresEl){
let londresDateEl = londresEl.querySelector(".date");
let londresTimeEl = londresEl.querySelector(".time");
londresDateEl.innerHTML = moment().tz("Europe/London").format("DD/MM/YYYY");
    londresTimeEl.innerHTML = moment().tz("Europe/London").format("hh:mm:ss A");
  }


}
function updateCity(event){
    let cityTimeZone = event.target.value; 
    let cityTime = moment().tz(cityTimeZone);
    let citiesEl = document.querySelector("#cities");


let cityName = cityTimeZone.replace("_", " ").split("/")[1];

    citiesEl.innerHTML = 
 ` <div class="city" 
    <h2>${cityName} </h2>
    <div class="time"> ${cityTime.format("MMMM Do YYYY")} </div>
<div class="date"> ${cityTime.format(" hh:mm:ss A")} </div >
 </div>
`
;



}

let citySelectEl = document.querySelector("#city");
citySelectEl.addEventListener("change" , updateCity);