const apiURLforecast = `https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=34398a871e3dd0f684c598c05f611a2f`;
fetch(apiURLforecast)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const noon = jsObject.list.filter(x=>x.dt_txt.includes('18:00:00'));
        console.log(noon);

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day = 0;
        noon.forEach(forecast =>{
        let thedate = new Date(forecast.dt_txt);
        document.querySelector(`#dayofweek${day + 1}`).textContent = weekdays[thedate.getDay()];
        document.querySelector(`#forecast${day + 1}`).textContent = forecast.main.temp.toFixed(0);
        const weathericon = document.querySelector(`#icon${day + 1}`);
        const imgsrc = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
        weathericon.setAttribute('src', imgsrc);
        day++;
    });
});


//sodasprings
const apiURLforecastsodaSpring = `https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=34398a871e3dd0f684c598c05f611a2f`;
fetch(apiURLforecastsodaSpring)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const noon = jsObject.list.filter(x=>x.dt_txt.includes('18:00:00'));
        console.log(noon);

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day = 0;
        noon.forEach(forecast =>{
        let thedate = new Date(forecast.dt_txt);
        document.querySelector(`#dayofweekSS${day + 1}`).textContent = weekdays[thedate.getDay()];
        document.querySelector(`#forecastSS${day + 1}`).textContent = forecast.main.temp.toFixed(0);
        const weathericon = document.querySelector(`#iconSS${day + 1}`);
        const imgsrc = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
        weathericon.setAttribute('src', imgsrc);
        day++;
    });
});


//Fish Haven
const apiURLforecastFishHeaven = `https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=34398a871e3dd0f684c598c05f611a2f`;
fetch(apiURLforecastFishHeaven)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const noon = jsObject.list.filter(x=>x.dt_txt.includes('18:00:00'));
        console.log(noon);

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day = 0;
        noon.forEach(forecast =>{
        let thedate = new Date(forecast.dt_txt);
        document.querySelector(`#dayofweekfh${day + 1}`).textContent = weekdays[thedate.getDay()];
        document.querySelector(`#forecastfh${day + 1}`).textContent = forecast.main.temp.toFixed(0);
        const weathericon = document.querySelector(`#iconfh${day + 1}`);
        const imgsrc = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
        weathericon.setAttribute('src', imgsrc);
        day++;
    });
});