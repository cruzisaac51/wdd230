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

// less slider navigation
$(document).ready(function(){

	$('.flexslider').flexslider({
		prevText: "",
		nextText: "",
		pauseOnAction: false,
		slideshowSpeed: 3000,
		touch: true
	});

});

document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  
    let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]")
      currentDropdown.classList.toggle("active")
    }
  
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove("active")
    })
  })