//event listener for search button when clicked
const searchBtn = document.querySelector(".searchBtn");
searchBtn.addEventListener("click", getWeather);

async function getWeather() {
  try {
    const input = document.getElementById("search").value;
    console.log(input);
    if (input === "") {
      input = "Baltimore";
    }

    //fetch data from api as soon as button is clicked
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        input +
        "," +
        "&appid=2bcd0a448a6ed39267afd0de0aa06a10&units=imperial",
      { mode: "cors" }
    );
    const data = await response.json();
    console.log("fetching data from api", data);

    //extract JSON data from api to get information about weather needed
    const name = data.name;
    const temp = data.main.temp;
    const feel = data.main.feels_like;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const maxTemp = data.main.temp_max;
    const weather = data.weather[0].main;
    buildPage(name, temp, feel, description, humidity, maxTemp, weather);
  } catch (err) {
    console.log("Something went wrong fetching the data", err);
  }
}

//function to build page depending on data received from api
function buildPage(name, temp, feel, description, humidity, maxTemp, weather) {
  const city = document.querySelector(".cityName");
  const cityTemperature = document.querySelector(".temperature");
  const feelsLike = document.querySelector(".feeling");
  const tempDescription = document.querySelector(".description");
  const tempHumidity = document.querySelector(".humidity");
  const maxTemperature = document.querySelector(".maxTemp");
  const icon = document.querySelector(".svg");

  //inserts data from api onto page
  city.innerHTML = `${name}`;
  cityTemperature.innerHTML = `${temp}` + "°F";
  feelsLike.innerHTML = "Feels Like: " + `${feel}` + "°F";
  tempDescription.innerHTML = `${description}`;
  tempHumidity.innerHTML = "Humidity: " + `${humidity}` + "%";
  maxTemperature.innerHTML = "Today's High: " + `${maxTemp}` + "°F";

  //changes weather icon depending on the weather of location searched
  switch (weather) {
    case "Clouds":
      icon.innerHTML = "";
      var cloudy = document.createElement("img");
      cloudy.src = "./svg/cloudy.svg";
      cloudy.style.height = "50px";
      cloudy.style.width = "50px";
      icon.appendChild(cloudy);
      break;

    case "Clear":
      icon.innerHTML = "";
      var clear = document.createElement("img");
      clear.src = "./svg/sunny.svg";
      clear.style.height = "50px";
      clear.style.width = "50px";
      icon.appendChild(clear);
      break;

    case "Fog":
      icon.innerHTML = "";
      var fog = document.createElement("img");
      fog.src = "./svg/fog.svg";
      fog.style.height = "50px";
      fog.style.width = "50px";
      icon.appendChild(fog);
      break;

    case "Snow":
      icon.innerHTML = "";
      var snow = document.createElement("img");
      snow.src = "./svg/snow.svg";
      snow.style.height = "50px";
      snow.style.width = "50px";
      icon.appendChild(snow);
      break;

    case "Rain":
      icon.innerHTML = "";
      var rain = document.createElement("img");
      rain.src = "./svg/rain.svg";
      rain.style.height = "50px";
      rain.style.width = "50px";
      icon.appendChild(rain);
      break;

    case "Drizzle":
      icon.innerHTML = "";
      var drizzle = document.createElement("img");
      drizzle.src = "./svg/drizzle.svg";
      drizzle.style.height = "50px";
      drizzle.style.width = "50px";
      icon.appendChild(drizzle);
      break;

    case "Thunderstorm":
      icon.innerHTML = "";
      var thunder = document.createElement("img");
      thunder.src = "./svg/thunder.svg";
      thunder.style.height = "50px";
      thunder.style.width = "50px";
      icon.appendChild(thunder);
      break;
  }
}
