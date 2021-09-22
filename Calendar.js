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
    var date = new Date();
    day = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    month = monthNames[month];
    document.getElementById('date').innerHTML = day + " " + month + " " + year;
    document.getElementById('underDate').innerHTML = month + " " + year;
}