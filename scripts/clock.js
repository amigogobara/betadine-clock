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

let seconds = 0;

function setDate() {
  if (seconds < 60) {
    seconds++;
    const secondsDegrees = (seconds / 60) * 360 + 90;
    hourHand.style.transform = `rotate(${secondsDegrees}deg)`;

    if (seconds >= 2 && seconds <= 6) {
      show1.style.display = "block";
    } else if (seconds >= 8 && seconds <= 13) {
      show2.style.display = "block";
    } else if (seconds >= 17 && seconds <= 21) {
      show3.style.display = "block";
    } else if (seconds >= 23 && seconds <= 28) {
      show4.style.display = "block";
    } else if (seconds >= 32 && seconds <= 37) {
      show5.style.display = "block";
    } else if (seconds >= 39 && seconds <= 44) {
      show6.style.display = "block";
    } else if (seconds >= 47 && seconds <= 51) {
      show7.style.display = "block";
    } else if (seconds >= 54 && seconds <= 58) {
      show8.style.display = "block";
    } else {
      show1.style.display = "none";
      show2.style.display = "none";
      show3.style.display = "none";
      show4.style.display = "none";
      show5.style.display = "none";
      show6.style.display = "none";
      show7.style.display = "none";
      show8.style.display = "none";
    }
  }
}
function start () {
    setInterval(setDate, 1000);
}

