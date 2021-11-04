setInterval(setClock, 1000)

var hourhand = document.getElementById('hourhand');
var minutehand = document.getElementById('minutehand');
var secondshand = document.getElementById('secondhand');

function setClock(){
    var time = new Date();
    var secondss = time.getSeconds();
    var minutess = time.getMinutes();
    var hourss = time.getHours();
    var text = document.getElementById("digitalTime");
    if(secondss<10)
    {
        secondss = "0"+secondss;
    }
    if(minutess<10)
    {
        minutess = "0"+minutess;
    }
    if(hourss<10)
    {
        hourss = "0"+hourss;
    }
    text.innerHTML = hourss+":"+minutess+":"+secondss;

    console.log(text);
    var seconds = (time.getSeconds())/60 ;
    var minutes = (seconds+time.getMinutes())/60 ;
    var hours = (minutes+time.getHours())/12;
    setRotation(hourhand, hours);
    setRotation(minutehand, minutes);
    setRotation(secondhand, seconds);
}

function setRotation(hand, rotation){
    hand.style.setProperty('--rotation', rotation*360);
}

setClock()

