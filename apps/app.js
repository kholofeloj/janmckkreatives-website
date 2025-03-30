const countDown = new Date("June 1, 2025 00:00:00").getTime();
const x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDown - now;

    // Time calculations for days, hours, minutes and seconds
    var days = formatNumber(Math.floor(distance / (1000 * 60 * 60 * 24)));
    var hours = formatNumber(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    var minutes = formatNumber(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    var seconds = formatNumber(Math.floor((distance % (1000 * 60)) / 1000));
    
    // Output the countdown in an element
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is less than 10, add a leading zero
    // Example: 1 becomes 01, 2 becomes 02, etc.
    function formatNumber(num) {
        if (num < 10) {
            return "0" + num;
        }
        return num;
    }

    // If the countdown is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }

}, 1000);