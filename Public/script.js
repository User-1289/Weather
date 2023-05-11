let temperature = '';
let humidity = '';
let windSpeed = '';
let description = '';
let images = '';
let imageApi;
let weatherApi;
fetch("/netlify/functions/server", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
})
  .then(response => response.json())
  .then(data => {
    imageApi = data.imageKey;
    weatherApi = data.weatherKey;
  })
  .catch(error => {
    console.error("Error:", error);
  });


    let vBtn = document.getElementById('btn');
    let vinputValue = document.querySelector('.inputValue');
    let vname = document.querySelector('.name');
    let vdesc = document.querySelector('.desc');
    let vtemp = document.querySelector('.temp');

    vBtn.addEventListener('click', function() {
      if (vinputValue.value.length == 0) {
        alert('Enter a city name ')
        return;
      }
      document.getElementById('weather-container').style.visibility = 'visible';

      fetch("https://api.openweathermap.org/data/2.5/weather?q=" + vinputValue.value + "&appid=" + weatherApi + "&units=metric")
        .then(response => response.json())
        .then(data => {
          console.log(data);
          temperature = data.main.temp;
          humidity = data.main.humidity;
          description = data.weather[0].description;
          windSpeed = data.wind.gust;

          var nameValue = data['name'];
          var tempValue = data['main']['temp'] + "°C";
          var descValue = data['weather'][0]['description'];
          vname.innerHTML = nameValue;
          vtemp.innerHTML = tempValue;
          vdesc.innerHTML = descValue;
          images = descValue;

          fetch(`https://api.unsplash.com/search/photos?query=${images}&client_id=${imageApi}`)
            .then(response => response.json())
            .then(data => {
              console.log(data.results);
              const image = data.results[0];
              const imageUrl = image.urls.regular;
              document.getElementById('image-container').style.backgroundImage = `url(${imageUrl})`;
            })
            .catch(error => {
              console.error(error);
            });
        });
    });
