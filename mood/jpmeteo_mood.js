var jpmeteo_mood = {
    get : function(temp, precip_mm)
    {
        var moods = [
            {
                'temp_min' : -10,
                'temp_max' : 0,
                'precip' : false,
                'mood' : 'bored'
            },
            {
                'temp_min' : -10,
                'temp_max' : 0,
                'precip' : true,
                'mood' : 'angry'
            },
            {
                'temp_min' : 0,
                'temp_max' : 10,
                'precip' : false,
                'mood' : 'bored'
            },
            {
                'temp_min' : 0,
                'temp_max' : 10,
                'precip' : true,
                'mood' : 'angry'
            },
            {
                'temp_min' : 10,
                'temp_max' : 20,
                'precip' : false,
                'mood' : 'neutral'
            },
            {
                'temp_min' : 10,
                'temp_max' : 20,
                'precip' : true,
                'mood' : 'sad'
            },
            {
                'temp_min' : 20,
                'temp_max' : 30,
                'precip' : false,
                'mood' : 'happy'
            },
            {
                'temp_min' : 20,
                'temp_max' : 30,
                'precip' : true,
                'mood' : 'neutral'
            },
            {
                'temp_min' : 30,
                'temp_max' : 40,
                'precip' : false,
                'mood' : 'happy'
            },
            {
                'temp_min' : 30,
                'temp_max' : 40,
                'precip' : true,
                'mood' : 'warm'
            }
        ];

        var precip = precip_mm > 0;

        var mood = moods.filter(function(mood)
        {
            return temp >= mood.temp_min && temp < mood.temp_max && precip == mood.precip;
        });

        mood = mood[0];

        return mood.mood;
    }
}