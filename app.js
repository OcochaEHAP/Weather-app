let locationTimezone = document.querySelector(".location-timezone");
let tempDescription = document.querySelector(".tem-description");
let degree = document.querySelector(".degree");
let long;
let lat;
let Api_key = "862a76d22116ac5dc0a16012c413c304";
let api;
function getLocation() {
  // a function to get location [lat,long]
  navigator.geolocation.getCurrentPosition(
    (position) => {
      long = position.coords.longitude.toFixed(2);
      lat = position.coords.latitude.toFixed(2);
      console.log(long, lat);
      api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${Api_key}`;
      getWeather(api);
    },
    (error) => console.log(error)
  );
}
function getWeather(api) {
  fetch(api).then((response) => console.log(response.json()));
}
getLocation();
