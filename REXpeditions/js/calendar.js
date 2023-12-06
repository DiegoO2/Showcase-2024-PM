const date = new Date();

const renderCalendar = () => {

    date.setDate(1);

    const monthDays = document.querySelector(".Days");

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const preLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1).getDay();

    const nextDays = 7 - lastDayIndex; //i change something

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
        days += `<div class="Pre-D">${preLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="Today">${i}</div>`;
        }
        else {
            days += `<div>${i}</div>`;
        }
        // x +=10  new x=x+10  https://www.youtube.com/watch?v=o1yMqPyYeAo 39.15
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="Next-D">${j}</div>`;
        monthDays.innerHTML = days;

    }

}


document.querySelector(".PreArrow").addEventListener("click", () => { date.setMonth(date.getMonth() - 1);renderCalendar(); });

document.querySelector(".NextArrow").addEventListener("click", () => { date.setMonth(date.getMonth() + 1);renderCalendar(); });

renderCalendar();

