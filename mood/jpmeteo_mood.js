var jpmeteo_mood = {

    get : function(temp, precip_mm)
    {
        var moods = [
            {
                'temp_min' : -10,
                'temp_max' : 0,
                'precip' : false,
                'mood' : 'bored',
                'img' : 'resources/moods/bored.png',
                'bubble' : [
                    "<span class='icon' style='background-image:url(\"{{icon}}\")'></span><span class='text'>{{text}}</span><span><span class='temp'>🌡️{{temp}}°C</span> !! Ca caille ! Un vin chaud et télé canapé !</span>"
                ]
            },
            {
                'temp_min' : -10,
                'temp_max' : 0,
                'precip' : true,
                'mood' : 'angry',
                'img' : 'resources/moods/angry.png',
                'bubble' : [
                    "<span class='icon' style='background-image:url(\"{{icon}}\")'></span><span class='text'>{{text}}</span><span><span class='temp'>🌡️{{temp}}°C</span> !! Infec ce temps... Un temps pour les bureaucrates !</span>"
                ]
            },
            {
                'temp_min' : 0,
                'temp_max' : 10,
                'precip' : false,
                'mood' : 'bored',
                'img' : 'resources/moods/bored.png',
                'bubble' : [
                    "<span class='icon' style='background-image:url(\"{{icon}}\")'></span><span class='text'>{{text}}</span><span>Bon, <span class='temp'>🌡️{{temp}}°C</span>, une écharpe 🧣, un café ☕ et ça devrait le faire</span>"
                ]
            },
            {
                'temp_min' : 0,
                'temp_max' : 10,
                'precip' : true,
                'mood' : 'angry',
                'img' : 'resources/moods/angry.png',
                'bubble' : [
                    "<span class='icon' style='background-image:url(\"{{icon}}\")'></span><span class='text'>{{text}}</span><span><span class='temp'>🌡️{{temp}}°C</span>, ça va, mais la pluie, c'est pas pour moi ! Heureusement que j'ai finis la toiture !!</span>"
                ]
            },
            {
                'temp_min' : 10,
                'temp_max' : 20,
                'precip' : false,
                'mood' : 'neutral',
                'img' : 'resources/moods/neutral.png',
                'bubble' : [
                    "<span class='icon' style='background-image:url(\"{{icon}}\")'></span><span class='text'>{{text}}</span><span><span class='temp'>🌡️{{temp}}°C</span>... C'est pas mal. Bon, c'est suffisant pour la bricole.</span>"
                ]
            },
            {
                'temp_min' : 10,
                'temp_max' : 20,
                'precip' : true,
                'mood' : 'sad',
                'img' : 'resources/moods/sad.png',
                'bubble' : [
                    "<span class='icon' style='background-image:url(\"{{icon}}\")'></span><span class='text'>{{text}}</span><span>Roh mais c'est quoi cette pluie ! Alors qu'il fait <span class='temp'>🌡️{{temp}}°C</span></span>"
                ]
            },
            {
                'temp_min' : 20,
                'temp_max' : 30,
                'precip' : false,
                'mood' : 'happy',
                'img' : 'resources/moods/happy.png',
                'bubble' : [
                    "<span class='icon' style='background-image:url(\"{{icon}}\")'></span><span class='text'>{{text}}</span><span>Ahh !!! ça c'est du beau temps ! Un bon <span class='temp'>🌡️{{temp}}°C</span>, parfait ! Les abeilles sont de sorti !</span>"
                ]
            },
            {
                'temp_min' : 20,
                'temp_max' : 30,
                'precip' : true,
                'mood' : 'neutral',
                'img' : 'resources/moods/neutral.png',
                'bubble' : [
                    "<span class='icon' style='background-image:url(\"{{icon}}\")'></span><span class='text'>{{text}}</span><span>Un bon <span class='temp'>🌡️{{temp}}°C</span> oui, mais une pluie.... Infec !</span>"
                ]
            },
            {
                'temp_min' : 30,
                'temp_max' : 40,
                'precip' : false,
                'mood' : 'happy',
                'img' : 'resources/moods/happy.png',
                'bubble' : [
                    "<span class='icon' style='background-image:url(\"{{icon}}\")'></span><span class='text'>{{text}}</span><span>Ouah !!! <span class='temp'>🌡️{{temp}}°C</span> !! Les volets fermés, une bonne bière bien fraîche et on reste au frais</span>"
                ]
            },
            {
                'temp_min' : 30,
                'temp_max' : 40,
                'precip' : true,
                'mood' : 'warm',
                'img' : 'resources/moods/warm.png',
                'bubble' : [
                    "<span class='icon' style='background-image:url(\"{{icon}}\")'></span><span class='text'>{{text}}</span><span><span class='temp'>🌡️{{temp}}°C</span> et une pluie ? ça pue l'orage non ?</span>"
                ]
            }
        ];

        var precip = precip_mm > 0;

        var mood = moods.filter(function(mood)
        {
            return temp >= mood.temp_min && temp < mood.temp_max && precip == mood.precip;
        });

        mood = mood[0];

        return mood;
    }
}