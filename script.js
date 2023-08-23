const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");

    const apiKey = "7ae4905b83172e59f7042ee2d2acaf72";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

    async function checkWeather(cityName){
        // fetch (search) = js api to make http request
        const response = await fetch(apiUrl + `&appid=${apiKey}&q=${cityName}`);
        var data = await response.json();

        console.log(data);
        // querySelector = selects by CSS selector
        // innerHTML = gets/sets the HTML content of the selected tag (sets lenna)
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        
        const weather = data.weather[0].main;
        if(weather == "Clouds")
            weatherIcon.src = "images/Clouds.png";
        else if(weather == "Rain")
            weatherIcon.src = "images/Rain.png";
        else if(weather == "Snow") 
            weatherIcon.src = "images/snowy.png";
        else if(weather == "Clear")
            weatherIcon.src = "images/Clear.png";
        else if(weather == "Windy")
            weatherIcon.src = "images/windy.png";
    }

    searchBtn.addEventListener("click", ()=>{
        if(searchBox.value == ""){
            alert("Please enter a city name");
            return;
        }
        else {
            checkWeather(searchBox.value);
        }
    });