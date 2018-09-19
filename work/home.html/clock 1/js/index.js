const HOURHAND = document.getElementById("hour");
const MINUTEHAND = document.getElementById("minute");
const SECONDHAND = document.getElementById("second");

var date = new Date();

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
 
let hrPosition = (hr * 30) + (min *(6) / 12 );
let minPosition = (min * 6) + (sec *(6) / 60 );
let secPosition = sec * 6; 
 
function runClock() {
   
  hrPosition = hrPosition+(3/360);
  minPosition = minPosition+(6/60);
  secPosition = secPosition+6;
   
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";  
}

setInterval(runClock, 1000);