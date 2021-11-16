const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
      if (!response.ok) {
          throw Error(response.statusText);
      } 
      else {
    return response.json();
      }
  })
  .then(function (jsonObject) {
    const prophets = jsonObject["prophets"];

    prophets.forEach((element) => {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      h2.textContent = `${element.name} ${element.lastname}`;
      const birthDate = document.createElement("div");
      const birthPlace = document.createElement("div");
      birthDate.textContent = `Date of Birth: ${element.birthdate}`;
      birthPlace.textContent = `Place of Birth: ${element.birthplace}`;
      const image = document.createElement("img");
      
      image.setAttribute("src", element.imageurl);
      image.setAttribute("alt",`${element.name} ${element.lastname} - ${element.order}`
      );

      card.appendChild(h2);
      card.appendChild(image);
      card.appendChild(birthDate);
      card.appendChild(birthPlace);
      document.querySelector("div.cards").appendChild(card);
    });
  });