var jpmeteo_details = {
    more : function(data)
    {
        var date = new Date();
        var current_time = Math.trunc(date.getTime() / 1000);

        for(var i in data.forecast.forecastday)
        {
            var forecastday = data.forecast.forecastday[i];

            for(var j in forecastday.hour)
            {
                var hour = forecastday.hour[j];

                hour.french_hour = jpmeteo_date.hours(hour.time_epoch * 1000);
                hour.french_date = jpmeteo_date.date(hour.time_epoch * 1000);

                if(!data.current_hour && hour.time_epoch > current_time)
                {
                    data.current_hour = forecastday.hour[j - 1];

                    data.current_hour.current = true;
                }
            }
        }
    }
}

var template;

$.ajax({
    url: 'details/jpmeteo_details.html',
    async: false,
    success: function(t) {
        template = t;
    }
});

$(document).ready(function()
{
    $('.jpmeteo_details .close').on('click', function()
    {
        $('.jpmeteo_details').removeClass('visible');
    });

    $('.jpmeteo_bubble .content').on('click', function()
    {
        $('.jpmeteo_details').addClass('visible');

        $('.jpmeteo_details .header .date').html(jpmeteo_date.date(data.forecast.forecastday[0].date_epoch * 1000));

        var details = Mustache.render(template, data.forecast.forecastday[0]);

        $('.jpmeteo_details .content').html(details);
    });

    $('.forecast .1').on('click', function()
    {
        $('.jpmeteo_details').addClass('visible');

        $('.jpmeteo_details .header .date').html(jpmeteo_date.date(data.forecast.forecastday[1].date_epoch * 1000));

        var details = Mustache.render(template, data.forecast.forecastday[1]);

        $('.jpmeteo_details .content').html(details);
    });

    $('.forecast .2').on('click', function()
    {
        $('.jpmeteo_details').addClass('visible');

        $('.jpmeteo_details .header .date').html(jpmeteo_date.date(data.forecast.forecastday[2].date_epoch * 1000));

        var details = Mustache.render(template, data.forecast.forecastday[2]);

        $('.jpmeteo_details .content').html(details);
    });
})
