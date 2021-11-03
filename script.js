setInterval(setClock, 1000)

const hourhand = document.getElementById('hourhand');
const minutehand = document.getElementById('minutehand');
const secondshand = document.getElementById('secondhand');

function setClock(){
const time = new Date();
const seconds = time.getSeconds() / 60;
const minutes = (seconds+time.getMinutes()) / 60;
const hours = (minutes + time.getHours()) / 12;
setRotation(hourhand, hours)
setRotation(minutehand, minutes)
setRotation(secondhand, seconds)
}

function setRotation(hand, rotation){
    hand.style.setProperty('--rotation', rotation*360);
}
setClock()


/*
setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()*/