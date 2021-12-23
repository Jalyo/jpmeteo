var conditions;

$.ajax({
    url: 'https://www.weatherapi.com/docs/conditions.json',
    dataType: 'json',
    async: false,
    success: function(c) {
        conditions = c;
    }
});

var jpmeteo_condition = {

    get : function(code)
    {
        var condition = conditions.filter(function(condition)
        {
            return condition['code'] == code;
        });

        condition = condition.shift();

        var french_condition = condition.languages.filter(function(language)
        {
            return language['lang_iso'] == 'fr';
        });

        french_condition = french_condition.shift();

        return french_condition;
    }
}