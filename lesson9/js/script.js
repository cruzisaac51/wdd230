const banner = document.getElementById("banner");
let today = new Date();
day = today.getDay();

const showBanner = () => {
    banner.style.display = "block";
};

if (day == 5) {
    showBanner();
}


const d = new Date();
const year = d.getFullYear();
const fulldate = `${year}`;
document.querySelector("#dateyear").textContent = fulldate;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const fdate = d.toLocaleDateString("en-UK", options);
document.querySelector("#lastUpdated").textContent = fdate;


function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

// const slider = document.getElementById("myRange");
// const output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value;
// }

function calculateWindChillFactor(temperature, windSpeed) {
    return 35.74 + (0.6215 * temperature) + (0.4275 * temperature - 35.75) * windSpeed ^ 0.16;
}
const currentTemperature = parseFloat(
    document.querySelector("#temp").textContent
);
const windSpeed = parseFloat(document.querySelector("#windSpeed").textContent);
if (temp <= 50 && windSpeed > 3.0) {
    let windChill = calculateWindChillFactor(temp, windSpeed);
} else {
    windChill = "N/A";
}

// const temp = 72
// const windSpeed = 5.5
// document.querySelector("#temp").innerHTML = temp;
// document.querySelector("#windSpeed").innerHTML = windSpeed;
document.querySelector("#windchill").innerHTML = windChill;

const thejsonurl = "https://byui-cit230.github.io/weather/data/towndata.json";

const townApi = async (key, value, nameImage) => {
    try {
      const response = await fetch(`${thejsonurl}`);
      const responsepart2 = await response.json();
      let listofitm = responsepart2[key];
      listofitm.forEach((element) => {
        if (element.name === value) {
            //create elements
            const createCards = document.createElement("div");
            let cardinfo = document.createElement("div");
            let titleh2 = document.createElement("h2");
            let pinformation = document.createElement("p");
            let yearFounded = document.createElement("p");
            let population = document.createElement("p");
            let averageRainFall = document.createElement("p");
            let image = document.createElement("img");

            //set attributes
            createCards.setAttribute("class", "card");
            pinformation.setAttribute("class", "motto-card");
            yearFounded.setAttribute("class", "par-card");
            population.setAttribute("class", "par-card");
            averageRainFall.setAttribute("class", "par-card");

            //insert elements
            titleh2.innerHTML = element.name;
            pinformation.innerHTML = element.motto;
            yearFounded.innerHTML = `Year Founded: ${element.yearFounded}`;
            population.innerHTML = `Population: ${element.currentPopulation}`;
            averageRainFall.innerHTML = `Annual Rain Fall: ${element.averageRainfall}`;
            image.setAttribute("src", `images/${nameImage}`);
            image.setAttribute("alt", `${element.name}'s photo`);
            image.setAttribute("class", "card-photo");
            cardinfo.appendChild(titleh2);
            cardinfo.appendChild(pinformation);
            cardinfo.appendChild(yearFounded);
            cardinfo.appendChild(population);
            cardinfo.appendChild(averageRainFall);
            createCards.appendChild(cardinfo);
            createCards.appendChild(image);
            document.querySelector("section.the-section").appendChild(createCards);
        }
      });
      return listofitm;
    } catch (error) {
      console.log(error);
    }
  };
  
  townApi("towns", "Fish Haven", "fishhaven.webp");
  townApi("towns", "Preston", "preston.webp");
  townApi("towns", "Soda Springs", "sodasprings.webp");