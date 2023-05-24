// Original tutorial:
// https://www.educative.io/answers/how-to-create-a-countdown-timer-using-javascript

// We create a Date object and then call the getTime() function
// on this object. The getTime() method makes the countDownDate
// variable hold the milliseconds since Jan 1, 1970, 00:00:00.000 GMT
var startDate = new Date("Sep 1, 2023 17:00:00").getTime();
//var startDate = new Date("Apr 1, 2023 17:00:00").getTime();

// Make our following code run every seconds using setInterval() method
var myfunc = setInterval(function() {

    // Calculate time difference in milliseconds between current date
    // and end date.
    var now = new Date().getTime();
    var timeleft = startDate - now;

    // Once difference has been found, convert milliseconds into days, hours,
    // minutes and seconds.
    var days = Math.floor(timeleft / (1000*60*60*24));
    var hours = Math.floor((timeleft % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((timeleft % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((timeleft % (1000*60)) / (1000));

    // Display output to users
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;

    if (timeleft < 0) {
        clearInterval(myfunc);

        document.getElementById("days").innerHTML = "";
        document.getElementById("hours").innerHTML = "";
        document.getElementById("mins").innerHTML = "";
        document.getElementById("secs").innerHTML = "";
        document.getElementById("end").innerHTML = "Jam already started! :-)";
    }
}, 1000)