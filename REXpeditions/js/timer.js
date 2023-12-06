


var futureDate = new Date("Mar 5, 2024 16:37:52").getTime();

var x = setInterval(function () {

    if (distance < 0) {
        futureDate.setMonth(futureDate.getMonth() + 3);//every 3 months 
    }

    var now = new Date().getTime();

    var distance = futureDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".Tdays").innerHTML = days;
    document.querySelector(".Thours").innerHTML = hours;
    document.querySelector(".Tminutes").innerHTML = minutes;
    document.querySelector(".Tseconds").innerHTML = seconds;

}, 1000)

