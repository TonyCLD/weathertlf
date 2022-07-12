var key = 'd73b91170c6f5780569843dbc01e0481'
var lat = 47.651375
var lon = -101.415855

var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=imperial&appid=${key}`;

var ourFetch = fetch(url).then(function (resObject) {
    return resObject.json();
    console.log(resObject);
}).then(function(data){
   console.log(data);
   $('#bigNum').html(Math.floor(data.current.temp));
   $('#relh_main').html(Math.floor(data.current.humidity));
   $('#UV_main').html(data.current.uvi);
   $('#wind_main').html(data.current.wind_speed);

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
                                             


})









