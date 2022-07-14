var key = 'd73b91170c6f5780569843dbc01e0481'
var lat = 47.651375;
var lon = -101.415855;
var ccode = 'US'
var statec = 'North Dakota'
var usercityname = 'Garrison'
var limit = 2

var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=imperial&appid=${key}`;
var geourl = `http://api.openweathermap.org/geo/1.0/direct?q=${usercityname},${statec},${ccode}&limit=${limit}&appid=${key}`

var ourFetch = fetch(geourl).then(function (resObject) {
    return resObject.json();
    console.log(resObject);
}).then(function(data){
    console.log(data);
    var latGotEl = (data[0].lat);
    var lonGotEl = (data[0].lon);
    var citynameEl = (data[0].name);
    parseInt(latGotEl);
    parseInt(lonGotEl);
    console.log("Name: " + citynameEl + " Latitue: " + latGotEl + " Longitude: " + lonGotEl);
});

var currentDayEl = moment().format(` LLL`);
$('#currentDay').text(currentDayEl);
console.log(currentDayEl);

var cityheaderEl = usercityname;
$('#thecityheader').html(cityheaderEl);

var ourFetch = fetch(url).then(function (resObject) {
    return resObject.json();
    console.log(resObject);
}).then(function(data){
   console.log(data);
   $('#bigNum').html(Math.round(data.current.temp));
   $('#relh_main').html(Math.round(data.current.humidity));
   $('#UV_main').html(Math.round(data.current.uvi));
   $('#wind_main').html(Math.round(data.current.wind_speed));
    var uviEl = (Math.round(data.current.uvi));
   if (uviEl === 0) {
    $(".uvindex").css("background-color", "var(--uvlevel0)");
    $(".uvindex").css("color", "var(--medgreen)"); 
   }
   if ((uviEl === 1) || (uviEl === 2)) {
    $(".uvindex").css("background-color", "var(--uvlevel1)");
    $(".uvindex").css("color", "var(--darkgreen)");
    $(".bightThestats3").css("color", "var(--ltgreen)"); 
   }

   if ((uviEl === 3) || (uviEl === 4) || (uviEl === 5)) {
    $(".uvindex").css("background-color", "var(--uvlevel2)");
    $(".uvindex").css("color", "var(--darkgreen)");
    $(".bightThestats3").css("color", "black"); 
   }

   if ((uviEl === 6) || (uviEl === 7)) {
    $(".uvindex").css("background-color", "var(--uvlevel3)");
    $(".uvindex").css("color", "var(--darkgreen)");
    $(".bightThestats3").css("color", "black"); 
   }

   if ((uviEl === 8) || (uviEl === 9) || (uviEl === 10)) {
    $(".uvindex").css("background-color", "var(--uvlevel4)");
    $(".uvindex").css("color", "black");
    $(".bightThestats3").css("color", "black"); 
   }
   if (uviEl >= 11) {
    $(".uvindex").css("background-color", "var(--uvlevel5)");
    $(".uvindex").css("color", "black");
    $(".bightThestats3").css("color", "black"); 
   }

   if (Math.round(data.current.weather[0].id) > 801) {
    $('#bigweathericon').attr("src", "assets/images/cloudy.gif"); 
    }
    if (Math.round(data.current.weather[0].id) === 801) {
    $('#bigweathericon').attr("src", "assets/images/partly.gif"); 
    }
    if (data.current.weather[0].id === 800) {
    $('#bigweathericon').attr("src", "assets/images/sunny.gif"); 
    }
    var rainEl = (Math.round(data.current.weather[0].id / 100) * 100);
    if (rainEl > 299 && rainEl < 322) {
    $('#bigweathericon').attr("src", "assets/images/rain.gif"); 
    }
    if (rainEl > 499 && rainEl < 532) {
    $('#bigweathericon').attr("src", "assets/images/rain.gif"); 
    }
    if (rainEl > 199 && rainEl < 233) {
    $('#bigweathericon').attr("src", "assets/images/stormy.gif");
    console.log(rainEl); 
    }
// Begins five day forecast 
$('#tempf_main1').html(Math.floor(data.daily[0].temp.day));
$('#relh_main1').html(Math.floor(data.daily[0].humidity));
$('#UV_main1').html(data.daily[0].wind_speed);
$('#wind_main1').html(data.daily[0].uvi);

$('#tempf_main2').html(Math.floor(data.daily[1].temp.day));
$('#relh_main2').html(Math.floor(data.daily[1].humidity));
$('#UV_main2').html(data.daily[1].wind_speed);
$('#wind_main2').html(data.daily[1].uvi);

$('#tempf_main3').html(Math.floor(data.daily[2].temp.day));
$('#relh_main3').html(Math.floor(data.daily[2].humidity));
$('#UV_main3').html(data.daily[2].wind_speed);
$('#wind_main3').html(data.daily[2].uvi);

$('#tempf_main4').html(Math.floor(data.daily[3].temp.day));
$('#relh_main4').html(Math.floor(data.daily[3].humidity));
$('#UV_main4').html(data.daily[3].wind_speed);
$('#wind_main4').html(data.daily[3].uvi);

$('#tempf_main5').html(Math.floor(data.daily[4].temp.day));
$('#relh_main5').html(Math.floor(data.daily[4].humidity));
$('#UV_main5').html(data.daily[4].wind_speed);
$('#wind_main5').html(data.daily[4].uvi);

console.log(Math.round(data.daily[0].weather[0].id));

    if (Math.round(data.daily[0].weather[0].id) > 801) {
    $('#5day01').attr("src", "assets/images/cloudy.gif"); 
    }
    if (Math.round(data.daily[0].weather[0].id) === 801) {
    $('#5day01').attr("src", "assets/images/partly.gif"); 
    }
    if (data.daily[0].weather[0].id === 800) {
    $('#5day01').attr("src", "assets/images/sunny.gif"); 
    }
    var rainEl = (Math.round(data.daily[0].weather[0].id / 100) * 100);
    if (rainEl > 299 && rainEl < 322) {
    $('#5day01').attr("src", "assets/images/rain.gif"); 
    }
    if (rainEl > 499 && rainEl < 532) {
    $('#5day01').attr("src", "assets/images/rain.gif"); 
    }
    if (rainEl > 199 && rainEl < 233) {
    $('#5day01').attr("src", "assets/images/stormy.gif");
    console.log(rainEl); 
    }

    if (Math.round(data.daily[1].weather[0].id) > 801) {
        $('#5day02').attr("src", "assets/images/cloudy.gif"); 
        }
        if (Math.round(data.daily[1].weather[0].id) === 801) {
        $('#5day02').attr("src", "assets/images/partly.gif"); 
        }
        if (data.daily[1].weather[0].id === 800) {
        $('#5day02').attr("src", "assets/images/sunny.gif"); 
        }
        var rainE2 = (Math.round(data.daily[1].weather[0].id / 100) * 100);
        if (rainE2 > 299 && rainE2 < 322) {
        $('#5day02').attr("src", "assets/images/rain.gif"); 
        }
        if (rainE2 > 499 && rainE2 < 532) {
        $('#5day02').attr("src", "assets/images/rain.gif"); 
        }
        if (rainE2 > 199 && rainE2 < 233) {
        $('#5day02').attr("src", "assets/images/stormy.gif");
        console.log(rainE2); 
        }

        if (Math.round(data.daily[2].weather[0].id) > 801) {
            $('#5day03').attr("src", "assets/images/cloudy.gif"); 
            }
            if (Math.round(data.daily[2].weather[0].id) === 801) {
            $('#5day03').attr("src", "assets/images/partly.gif"); 
            }
            if (data.daily[2].weather[0].id === 800) {
            $('#5day03').attr("src", "assets/images/sunny.gif"); 
            }
            var rainE3 = (Math.round(data.daily[2].weather[0].id / 100) * 100);
            if (rainE3 > 299 && rainE3 < 322) {
            $('#5day03').attr("src", "assets/images/rain.gif"); 
            }
            if (rainE3 > 499 && rainE3 < 532) {
            $('#5day03').attr("src", "assets/images/rain.gif"); 
            }
            if (rainE3 > 199 && rainE3 < 233) {
            $('#5day03').attr("src", "assets/images/stormy.gif");
            console.log(rainE3); 
            }

            if (Math.round(data.daily[3].weather[0].id) > 801) {
                $('#5day04').attr("src", "assets/images/cloudy.gif"); 
                }
                if (Math.round(data.daily[3].weather[0].id) === 801) {
                $('#5day04').attr("src", "assets/images/partly.gif"); 
                }
                if (data.daily[3].weather[0].id === 800) {
                $('#5day04').attr("src", "assets/images/sunny.gif"); 
                }
                var rainE4 = (Math.round(data.daily[3].weather[0].id / 100) * 100);
                if (rainE4 > 299 && rainE4 < 322) {
                $('#5day04').attr("src", "assets/images/rain.gif"); 
                }
                if (rainE4 > 499 && rainE4 < 532) {
                $('#5day04').attr("src", "assets/images/rain.gif"); 
                }
                if (rainE4 > 199 && rainE4 < 233) {
                $('#5day04').attr("src", "assets/images/stormy.gif");
                console.log(rainE4); 
                }
                if (Math.round(data.daily[4].weather[0].id) > 801) {
                    $('#5day05').attr("src", "assets/images/cloudy.gif"); 
                    }
                    if (Math.round(data.daily[4].weather[0].id) === 801) {
                    $('#5day05').attr("src", "assets/images/partly.gif"); 
                    }
                    if (data.daily[4].weather[0].id === 800) {
                    $('#5day05').attr("src", "assets/images/sunny.gif"); 
                    }
                    var rainE5 = (Math.round(data.daily[4].weather[0].id / 100) * 100);
                    if (rainE5 > 299 && rainE5 < 322) {
                    $('#5day05').attr("src", "assets/images/rain.gif"); 
                    }
                    if (rainE5 > 499 && rainE5 < 532) {
                    $('#5day05').attr("src", "assets/images/rain.gif"); 
                    }
                    if (rainE5 > 199 && rainE5 < 233) {
                    $('#5day05').attr("src", "assets/images/stormy.gif");
                    console.log(rainE5); 
                    }

})









