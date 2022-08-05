// Window.onload = () => {};
function getLocation() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
    },
    (error) => console.log(error)
  );
}

getLocation();
