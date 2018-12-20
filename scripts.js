$("#weather-form").submit((event)=>{
    // prevents default behavior
    // prevents from reloading the page
    event.preventDefault();
    const zip = $(".zip-code").val();
    
    const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&units=imperial&appid=${apiKey}`;
    // we got the zip code
    // we built the url
    // go get the JSON
    // $.getJSON is short for $.ajax
    // it expects 2 args:
    // 1) URL to fetch the json form
    // 2) the callback to run when the ajax comes back

$.getJSON(weatherUrl, (weatherData) =>{
    const locationInfo = {
        city: weatherData.city.name,
        weatherIcon: weatherData.icon,
        temp: weatherData.temp,
        fromDate: "",
        toDate:"",
    };
    let locationMiddleHTML = `
        <div class="city-name">Here is the forecast for ${locationInfo.city}!</div>
    `
    $(".middle").html(locationMiddleHTML);

    let locationBottomHTML = `
        <div class="${locationInfo.city} col-4"
            <div class="weather-icon"><img class="symbol" src="${locationInfo.weatherIcon}.png"></div>
            <div class="temp">${locationInfo.temp}</div>
        </div>
    `
    $(".bottom").html(locationBottomHTML);

    });
});

