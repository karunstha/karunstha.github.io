var finalTime = new Date("Jun 14, 2020 00:00:00").getTime();
var interval = 0;
var blink = false;
var x = setInterval(function () {

    var currTime = new Date().getTime();

    var timeDiff = finalTime - currTime;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    var day_a = Math.floor(days / 10);
    var day_b = days % 10;
    var hours_a = Math.floor(hours / 10);
    var hours_b = hours % 10;
    // Output the result in an element with id="demo"
    document.getElementById("day_a").innerHTML = day_a;
    document.getElementById("day_b").innerHTML = day_b;
    document.getElementById("hours_a").innerHTML = hours_a;
    document.getElementById("hours_b").innerHTML = hours_b;

    // If the count down is over, write some text
    if (timeDiff < 0) {
        clearInterval(x);
        document.getElementById("day_a").innerHTML = 0;
        document.getElementById("day_b").innerHTML = 0;
        document.getElementById("hours_a").innerHTML = 0;
        document.getElementById("hours_b").innerHTML = 0;
    }
    if (blink) {
        document.getElementById("colon").style.color = 'white';
        blink=false;
    } else {
        document.getElementById("colon").style.color = '#E6434C';
        blink=true;
    }
    interval = 10000;
}, interval);