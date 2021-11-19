// show the baner
const banner = document.getElementById("banner");
let today = new Date();
day = today.getDay();

const showBanner = () => {
    banner.style.display = "block";
};

if (day == 5) {
    showBanner();
}

//Date
const d = new Date();
const year = d.getFullYear();
const fulldate = `${year}`;
document.querySelector("#dateyear").textContent = fulldate;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const fdate = d.toLocaleDateString("en-UK", options);
document.querySelector("#lastUpdated").textContent = fdate;

//Responsive menu
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}


//windchill
// function calculateWindChillFactor(temperature, windSpeed) {
//     return 35.74 + (0.6215 * temperature) + (0.4275 * temperature - 35.75) * windSpeed ^ 0.16;
// }
// const currentTemperature = parseFloat(
//     document.querySelector("#temp").textContent
// );
// const windSpeed = parseFloat(document.querySelector("#windSpeed").textContent);
// if (temp <= 50 && windSpeed > 3.0) {
//     let windChill = calculateWindChillFactor(temp, windSpeed);
// } else {
//     windChill = "N/A";
// }
// document.querySelector("#windchill").innerHTML = windChill;


//towns info
// const thejsonurl = "https://byui-cit230.github.io/weather/data/towndata.json";

// const townApi = async (key, value, nameImage) => {
//     try {
//       const response = await fetch(`${thejsonurl}`);
//       const responsepart2 = await response.json();
//       let listofitm = responsepart2[key];
//       listofitm.forEach((element) => {
//         if (element.name === value) {
//             //create elements
//             const createCards = document.createElement("div");
//             let cardinfo = document.createElement("div");
//             let titleh2 = document.createElement("h2");
//             let pinformation = document.createElement("p");
//             let yearFounded = document.createElement("p");
//             let population = document.createElement("p");
//             let averageRainFall = document.createElement("p");
//             let image = document.createElement("img");

//             //set attributes
//             createCards.setAttribute("class", "card");
//             pinformation.setAttribute("class", "motto-card");
//             yearFounded.setAttribute("class", "par-card");
//             population.setAttribute("class", "par-card");
//             averageRainFall.setAttribute("class", "par-card");

//             //insert elements
//             titleh2.innerHTML = element.name;
//             pinformation.innerHTML = element.motto;
//             yearFounded.innerHTML = `Year Founded: ${element.yearFounded}`;
//             population.innerHTML = `Population: ${element.currentPopulation}`;
//             averageRainFall.innerHTML = `Annual Rain Fall: ${element.averageRainfall}`;
//             image.setAttribute("src", `images/${nameImage}`);
//             image.setAttribute("alt", `${element.name}'s photo`);
//             image.setAttribute("class", "card-photo");
//             cardinfo.appendChild(titleh2);
//             cardinfo.appendChild(pinformation);
//             cardinfo.appendChild(yearFounded);
//             cardinfo.appendChild(population);
//             cardinfo.appendChild(averageRainFall);
//             createCards.appendChild(cardinfo);
//             createCards.appendChild(image);
//             document.querySelector("section.the-section").appendChild(createCards);
//         }
//       });
//       return listofitm;
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
//   townApi("towns", "Fish Haven", "../../lesson9/images/fishhaven.webp");
//   townApi("towns", "Preston", "../../lesson9/images/preston.webp");
//   townApi("towns", "Soda Springs", "../../lesson9/images/sodasprings.webp");

// Weather API

const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=f2872719ed7cdab5d0af213076f4c716`;
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        

        
        const currentTempStrign = document.querySelector('#current-temp-string');
        const currentTemp = document.querySelector('#current-temp');
        const pathname = document.querySelector('#imagesrc');
        const weathericon= document.querySelector('#icon');
        const windSpeed = document.querySelector('#windSpeed');
        const windChill = document.querySelector("#windchill");
        const humidity = document.querySelector("#humidity");
        
        currentTempStrign.textContent = jsObject.weather[0].main;
        currentTemp.textContent = jsObject.main.temp.toFixed(0);
        windSpeed.textContent = jsObject.wind.speed.toFixed(0);
        humidity.textContent =jsObject.main.humidity.toFixed(0);
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
        
        

        let windChill1 = 35.74 + (0.6215 * currentTemp) + (0.4275 * currentTemp - 35.75) * windSpeed ^ 0.16;
        if (currentTemp <= 50 && windSpeed > 3){
            windChill.textContent = windChill1;
        } else {
            windChill.textContent = "N/A";
        }
        
        humidity.textContent =jsObject.main.humidity.toFixed(0);
        currentTempStrign.textContent = jsObject.weather[0].main;
        currentTemp.textContent = jsObject.main.temp.toFixed(0);
        windSpeed.textContent = jsObject.wind.speed.toFixed(0);
        weathericon.setAttribute('src', imgsrc); 
        weathericon.setAttribute('alt', imgalt);
        pathname.textContent = imgsrc;

    });
