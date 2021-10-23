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