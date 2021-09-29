var year;
var month;
var day;
var lang = navigator.language;
var crt_year;
var crt_month;
var crt_day;

function windowsClock() {
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes(); //format content hh-mm-ss!
    var s = time.getSeconds();
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    document.getElementById('clock').innerHTML = `${h}:${m}:${s}`; //good practice - in this case
    time = setTimeout('windowsClock()', 100);
}
function windowsDate() {
    var aux = new Date();
    day = aux.getDate();
    month = aux.getMonth();
    year = aux.getFullYear();
    crt_month = aux.getMonth();
    crt_year = aux.getFullYear();
    crt_day = aux.getDate();
    var event1 = new Date(year, month, day);
    var event2 = new Date(year, month);
    var options1 = { year: 'numeric', month: 'long', day: 'numeric' };
    var options2 = { month: 'long', year: 'numeric' };
    var date1 = event1.toLocaleDateString(lang, options1);
    var date2 = event2.toLocaleDateString(lang, options2);
    // day = date.getDate();
    // month = date.getMonth();
    // year = date.getFullYear();
    // var monthNames = ["January", "February", "March", "April", "May", "June",
    // "July", "August", "September", "October", "November", "December"];
    // month = monthNames[month];
    document.getElementById('date').innerHTML = date1;
    document.getElementById('underDate').innerHTML = date2;
    cucu(crt_year, crt_month);
    is_this_the_day(crt_year, crt_month);
}
function back_dates() {
    if (month == 0) {
        month = 11;
        year -= 1;
    } else {
        month -= 1;
    }
    cucu(year, month);
    is_this_the_day(year, month);
    var options2 = { month: 'long', year: 'numeric' };
    var event2 = new Date(year, month);
    var date2 = event2.toLocaleDateString(lang, options2);
    document.getElementById('underDate').innerHTML = date2;
}
function forward_dates() {
    if (month == 11) {
        month = 0;
        year += 1;
    } else {
        month += 1;
    }
    cucu(year, month); //make function
    is_this_the_day(year, month);
    var options2 = { month: 'long', year: 'numeric' };
    var event2 = new Date(year, month);
    var date2 = event2.toLocaleDateString(lang, options2);
    document.getElementById('underDate').innerHTML = date2;
}
function cucu(yr, mnth) {
    let event = new Date(yr, mnth);
    let day = event.getDay();
    let crt_date = event.getDate();
    var table = '<tr>';
    let i;
    if (day == 0) {
        day = 7;
    }
    var nr_of_rows = 1;
    var nr_of_days = new Date(yr, mnth + 1, 0).getDate();
    var nr_of_days2 = new Date(yr, mnth, 0).getDate();

    var prev_month = nr_of_days2 - day + 2; //make function
    var count = 1;
    for (i = 1; i < day; i++) {
        table += '<td style="color:grey">' + prev_month + '</td>';
        prev_month += 1;
    }
    let first_row = 7 - day + 1;
    for (i = 0; i < first_row; i++) {
        table += '<td>' + count + '</td>';
        count += 1;
    }
    table += '</tr><tr>';
    while (count <= nr_of_days) {
        table += '<td>' + count + '</td>';
        event.setDate(count);
        if (event.getDay() == 0) {
            table += '</tr><tr>';
            nr_of_rows += 1;
        }
        count += 1;
    }
    let new_count = 1;
    var next_month = event.getDay();
    if (next_month == 0) {
        table += '</tr>';
        if (nr_of_rows < 6) {
            table += '<tr>';
            for (i = 0; i < 6 - nr_of_rows; i++) {
                for (j = 0; j < 7; j++) {
                    table += '<td style="color:grey">' + new_count + '</td>';
                    new_count += 1;
                }
                table += '<tr>';
            }
        }
    } else {
        nr_of_rows += 1;
        for (i = next_month; i < 7; i++) {
            table += '<td style="color:grey">' + new_count + '</td>';
            new_count += 1;
        }
        table += '</tr>';
        if (nr_of_rows < 6) {
            table += '<tr>';
            for (i = 0; i < 6 - nr_of_rows; i++) {
                for (j = 0; j < 7; j++) {
                    table += '<td style="color:grey">' + new_count + '</td>';
                    new_count += 1;
                }
                table += '<tr>';
            }
        }
    }
    table += '</tr>';
    document.getElementById('cal').innerHTML = table;
}
function is_this_the_day(yr, mnth) {
    let i;
    if (yr == crt_year && mnth == crt_month) {
        let arr = document.getElementsByTagName('td');
        for (i = 0, max = arr.length; i < max; i++) {
            if (arr[i].innerHTML == crt_day && arr[i].style.color != "grey") {
                arr[i].setAttribute("id", "crtDate");
            }
        }
    }
}