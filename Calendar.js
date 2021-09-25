function windowsClock() {
    var time = new Date();
    h = time.getHours();
    m = time.getMinutes();
    s = time.getSeconds();
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    time = setTimeout('windowsClock()', 100);
}

function windowsDate() {
    var lang = navigator.language;
    var event = new Date();
    const option_day = { day: 'numeric' };
    const option_month = { month: 'long' };
    const option_year = { year: 'numeric' };
    day = event.toLocaleDateString(lang, option_day);
    month = event.toLocaleDateString(lang, option_month);
    year = event.toLocaleDateString(lang, option_year);
    // var date = new Date();
    // day = date.getDate();
    // month = date.getMonth();
    // year = date.getFullYear();
    // const monthNames = ["January", "February", "March", "April", "May", "June",
    // "July", "August", "September", "October", "November", "December"];
    // month = monthNames[month];
    document.getElementById('date').innerHTML = day + " " + month + " " + year;
    document.getElementById('underDate').innerHTML = month + " " + year;
}

function windowsCalendar() {
    var date = new Date();
    month = date.getMonth();
    year = date.getFullYear();
    document.getElementById('cal').innerHTML = createCalendar(cal, year, month);
}