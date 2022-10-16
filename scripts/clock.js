const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const show1 = document.querySelector(".time-1");
const show2 = document.querySelector(".time-2");
const show3 = document.querySelector(".time-3");
const show4 = document.querySelector(".time-4");
const show5 = document.querySelector(".time-5");
const show6 = document.querySelector(".time-6");
const show7 = document.querySelector(".time-7");
const show8 = document.querySelector(".time-8");
const vedio = document.querySelector("video");
const audio = document.querySelector("audio");
var x;
let seconds = 0;

function setDate() {
  if (seconds < 60) {
    seconds++;
    console.log(seconds);
    const secondsDegrees = (seconds / 60) * 360 + 90;
    hourHand.style.transform = `rotate(${secondsDegrees}deg)`;

    if (seconds >= 2 && seconds <= 6) {
      show1.style.display = "flex";
    } else if (seconds >= 8 && seconds <= 13) {
      show2.style.display = "flex";
    } else if (seconds >= 17 && seconds <= 21) {
      show3.style.display = "flex";
    } else if (seconds >= 23 && seconds <= 28) {
      show4.style.display = "flex";
    } else if (seconds >= 31 && seconds <= 37) {
      show5.style.display = "flex";
    } else if (seconds >= 39 && seconds <= 44) {
      show6.style.display = "flex";
    } else if (seconds >= 47 && seconds <= 51) {
      show7.style.display = "flex";
    } else if (seconds >= 54 && seconds <= 58) {
      show8.style.display = "flex";
    } else if (seconds >= 60) {
      clearInterval(x);
      seconds = 0;
      audio.muted = true;
      vedio.style.display = "block";
      vedio.autoplay = true;
      // audio.autoplay = false;
      // vedio.webkitEnterFullscreen();
      vedio.load();
      vedio.onended = function () {
        vedio.style.display = "none";
        document.getElementById("demo").innerHTML = `<audio controls autoplay>
      <source src="img/mm.mp3" type="audio/ogg">
      <source src="img/mm.mp3" type="audio/mpeg">
    </audio>`;
        // audio.autoplay = true;
      };
    } else {
      show1.style.display = "none";
      show2.style.display = "none";
      show3.style.display = "none";
      show4.style.display = "none";
      show5.style.display = "none";
      show6.style.display = "none";
      show7.style.display = "none";
      show8.style.display = "none";
      vedio.style.display = "none";
    }
  }
  console.log(seconds);
}
function start() {
  x=setInterval(setDate, 100);
  
}
