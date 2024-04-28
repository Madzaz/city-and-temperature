let cities = [];

function addCity() {
  let cityAdd = prompt("Add City and Temperature");
  cityAdd = cityAdd.split(" ");

  let tempCity = {
    cityName: cityAdd[0],
    temperature: cityAdd[1],
  };

  cities.push(tempCity);
}

function warmCity() {
  document.getElementById("divWarm").innerHTML = "";

  cities.forEach((city) => {
    if (city.temperature >= 0) {
      const paragraphElement = document.createElement("p");
      paragraphElement.textContent = `${city.cityName}: ${city.temperature} °C`;

      divWarm.appendChild(paragraphElement);
    }
  });
}

function coldCity() {
  document.getElementById("divCold").innerHTML = "";

  cities.forEach((city) => {
    if (city.temperature < 0) {
      const paragraphElement = document.createElement("p");
      paragraphElement.textContent = `${city.cityName}: ${city.temperature} °C`;

      divCold.appendChild(paragraphElement);
    }
  });
}
