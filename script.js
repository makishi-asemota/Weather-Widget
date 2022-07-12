const searchBtn = document.querySelector(".searchBtn");
searchBtn.addEventListener("click", getWeather);

async function getWeather() {
  try {
    const input = document.getElementById("search").value;
    console.log(input);
    if (input === "") {
      input = "Baltimore";
    }
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        input +
        "," +
        "&appid=2bcd0a448a6ed39267afd0de0aa06a10&units=imperial",
      { mode: "cors" }
    );
    const data = await response.json();
    console.log("fetching data from api", data);
    const name = data.name;
    const temp = data.main.temp;
    const feel = data.main.feels_like;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const maxTemp = data.main.temp_max;
    buildPage(name, temp, feel, description, humidity, maxTemp);
  } catch (err) {
    console.log("Something went wrong fetching the data", err);
  }
}

function buildPage() {}
