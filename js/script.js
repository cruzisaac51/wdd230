const d = new Date();
const year = d.getFullYear();
const fulldate = `${year}`;
document.querySelector("#dateyear").textContent = fulldate;


let oLastModif = new Date(document.lastModified)
document.querySelector("#lastUpdated").textContent = oLastModif;