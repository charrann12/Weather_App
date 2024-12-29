
// apiKey taken from open weather map 
const apiKey = "53a91e6b198a1c295aa4785ece448e95";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

//these are made to functionalise the input and search button.
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search  button");

// intialising weather-icon so that the image in the card changes as per the weather condition of the city
const weatherIcon = document.querySelector(".weather-icon");

const background = document.querySelector("#myVideo");


 //function to fetch weather conditions from the apiKey
async function checkWeather(city) {
     const response = await fetch(apiURL + city + `&appid=${apiKey}`);
     if (response.status == 404){
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
     }
     else{
      var data = await response.json();

     
    // to manipulate the current info as per the input city's forecasting info
     document.querySelector(".city_name").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
     document.querySelector(".wind").innerHTML = data.wind.speed + " Kmph";

    // changing the display none to block whenever the city name is entered 
     document.querySelector(".weather ").style.display = "block";

     // image changes 
     if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
        background.src = "videos/cloudy.mp4";
     }

     else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
        background.src = "videos/clear.mp4";
     }

     else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
        background.src = "videos/drizzle.mp4";
     }

     else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
        background.src = "videos/mistt.mp4";
      }

     else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
        background.src = "videos/rainn.mp4";
     }

     else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
        background.src = "videos/snow.mp4";
     }

      
     document.querySelector(".weather").style.display = "block";
     document.querySelector(".error").style.display="none";


     }
      

}

// event listener for search button to fetch the weather of the city entered in the search box 
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


//function calling
checkWeather();

