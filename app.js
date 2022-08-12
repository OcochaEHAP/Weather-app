let locationTimezone = document.querySelector(".location-timezone");
let tempDescription = document.querySelector(".tem-description");
let degree = document.querySelector(".degree");
let icon_div = document.querySelector(".icon");
let Api_key = "862a76d22116ac5dc0a16012c413c304";
let api;
// location var's
let long;
let lat;
// weather var's
let temp;
let summary;
let timeZone;
let icon;
let iconcode;
// let timezone; dont forget to search
function getLocation() {
  // a function to get location [lat,long]
  navigator.geolocation.getCurrentPosition(
    (position) => {
      long = position.coords.longitude.toFixed(2);
      lat = position.coords.latitude.toFixed(2);
      // console.log(long, lat);
      api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${Api_key}&units=metric`;
      getWeather(api);
    },
    (error) => console.log(error) // a popup when error search about it
  );
}
const getWeather = function (api) {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      temp = data.main.temp;
      summary = data.weather[0].description;
      timeZone = `Timezone: GMT ${data.timezone / 3600}:00 `;
      iconcode = data.weather[0].icon;
      icon = `http://openweathermap.org/img/w/${iconcode}.png`;
      // console.log(timeZone);
      // return temp, summary;
    })
    .then((data) => {
      // console.log(temp);
      // console.log(summary);
      showWeather();
    });
};

function showWeather() {
  tempDescription.textContent = summary;
  degree.textContent = temp;
  locationTimezone.textContent = timeZone;
  icon_div.setAttribute("src", icon);
}

getLocation();
