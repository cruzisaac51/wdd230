const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=5604473&units-imperial&APPID=f2872719ed7cdab5d0af213076f4c716`;
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        
        const currentTemp = document.querySelector('#current-temp');
        const pathname = document.querySelector('#imagesrc');
        const weathericon= document.querySelector('#icon');
        
        

        currentTemp.textContent = jsObject.main.temp.toFixed(0)/10;
        let imgsrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        let imgalt = jsObject.weather[0].description;
        let capimgalt = '';
        let i = 0;
        for (i < imgalt.length; i++;) {
            if (chartAt(i) === 0) {
                capimgalt += imgalt.charAt(i).toUpperCase();
            } else {}
        }
        imgalt = imgalt.charAt(0).toUpperCase() + imgalt.slice(1);

        currentTemp.textContent = jsObject.main.temp.toFixed(0)/10;
        weathericon.setAttribute('src', imgsrc); 
        weathericon.setAttribute('alt', imgalt);
        pathname.textContent = imgsrc;

    });

        
