function date_to_string(objToday)
{
    var weekday = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'),
        dayOfWeek = weekday[objToday.getDay()],
        domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return ""; a = parseInt((a + "").charAt(1)); return "" }(),
        dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
        months = new Array('Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'),
        curMonth = months[objToday.getMonth()],
        curYear = objToday.getFullYear();
    var today = dayOfWeek + " " + dayOfMonth + " " + curMonth + ", " + curYear;

    return today;
}

jpmeteo_date = {
    date : function(date)
    {
        date = new Date(date);

        return date_to_string(date);
    },
    hours : function(date)
    {
        date = new Date(date);

        var hours = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
        var minutes = date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();

        return hours + ":" + minutes;
    }
}