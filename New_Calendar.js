var lang = navigator.language;
var crtYear, crtMonth, crtDate;
var month, year;
function windowsClock() {
    var options = { hour: '2-digit', minute: '2-digit', 
    second: '2-digit', hour12: false}
    var time = new Date();
    document.getElementById('clock').innerHTML = 
    time.toLocaleTimeString(lang, options);
    time = setTimeout('windowsClock()', 100);
}
function windowsDate() {
    var date = new Date();
    crtYear = date.getFullYear();
    crtMonth = date.getMonth();
    crtDate = date.getDate();
    month = crtMonth;
    year = crtYear;
    var optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').innerHTML = 
    date.toLocaleDateString(lang, optionsDate);
    changeTable(year, month);
}
function backMonth() {
    (month == 0) ? (month = 11, year -= 1) : month -= 1;
    changeTable(year, month);
}
function forwardMonth() {
    (month == 11) ? (month = 0, year += 1) : month += 1;
    changeTable(year, month);
}
function generateDatesTable(y, m) {
    var i;
    var table = '<tr>';
    var date = new Date(y, m);
    var firstDay = date.getDay() || 7;
    var count = firstDay + 1;
    var prevMonth = m;
    var nrCrtMonth = new Date(y, m + 1, 0).getDate();
    (m == 0) ? prevMonth = 11 : prevMonth -= 1;
    var nrPrevMonth = new Date(y, prevMonth + 1, 0).getDate();
    var startNr = firstLineStartVal(nrPrevMonth, firstDay);
    for (i = 0; i < firstDay; i++) {
        table += '<td style="color:grey">' + startNr + '</td>';
        startNr += 1;
    }
    if (firstDay == 7) {
        table += '</tr>' + '<tr>';
    }
    for (i = 1; i <= nrCrtMonth; i++) {
        if (m == crtMonth && i == crtDate && y == crtYear) {
            table += '<td id="crtDate">' + i + '</td>';
        } else {
            table += '<td>' + i + '</td>';
        }
        if (count % 7 == 0) {
            table += '</tr>' + '<tr>';
        }
        count += 1;
    }
    var crtSize = count - 1;
    var d = 1;
    for (i = crtSize; i < 42; i++) {
        table += '<td style="color:grey">' + d + '</td>';
        d += 1;
        if (count % 7 == 0) {
            table += '</tr>' + '<tr>';
        }
        count += 1;
    }
    table += '</tr>'
    return table
}
function firstLineStartVal(nrDaysPrevMonth, firstDayOfCrtMonth) {
    return nrDaysPrevMonth - firstDayOfCrtMonth + 1;
}
function changeTable(y, m) {
    document.getElementById('dates').innerHTML = generateDatesTable(y, m);
    var date = new Date(y, m);
    var optionsUnderDate = { month: 'long', year: 'numeric' };
    document.getElementById('underDate').innerHTML = 
    date.toLocaleDateString(lang, optionsUnderDate);
}