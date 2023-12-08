const date = new Date(); 

const renderCalendar = () => {

    date.setDate(1);

    const monthDays = document.querySelector(".Days");

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const preLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1).getDay();

    const nextDays = 7 - lastDayIndex; //I change something some error

    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    document.querySelector(".Date h3").innerHTML = month[date.getMonth()];

    document.querySelector(".Date p").innerHTML = date.getFullYear();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="Pre-D"><a href="Booking4.html" onclick="dateclick()">${preLastDay - x + 1}</a></div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {// I add here the year to the if
            days += `<div class="Today"><a href="Booking4.html" onclick="dateclick()">${i}</a></div>`;
        }
        else {
            days += `<div><a href="Booking4.html" onclick="dateclick()">${i}</a></div>`;
        }
        // x +=10  new x=x+10  
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="Next-D"><a href="Booking4.html" onclick="dateclick()">${j}</a></div>`;
        monthDays.innerHTML = days;

    }

}

function dateclick(){
    localStorage.setItem("Date", date.getMonth() + "/" + date.getDate() + " ," + date.getFullYear());
}

console.log(date.getMonth() + "/" + date.getDate() + " ," + date.getFullYear());


document.querySelector(".PreArrow").addEventListener("click", () => { date.setMonth(date.getMonth() - 1);renderCalendar(); });

document.querySelector(".NextArrow").addEventListener("click", () => { date.setMonth(date.getMonth() + 1);renderCalendar(); });

renderCalendar();

