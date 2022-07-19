const temp = document.getElementById("temp");
const desc = document.getElementById("desc");
const humidity = document.getElementById("hum");
const wSpeed = document.getElementById("wSpeed");
const btn = document.getElementById("btn");
const cityName = document.getElementById("c-name");
const currentDate = document.getElementById("date");
const weekday = document.getElementById("weekday");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const imgHumidity = document.getElementById("img-humidity")
const imgWind = document.getElementById("img-wind")
const imgSunrise = document.getElementById("img-sunrise")
const imgSunset = document.getElementById("img-sunset")


btn.addEventListener("click", () => {
	let city = document.getElementById("city").value;

    

	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d7314495091e5a59a46e480759172ae2&units=metric`
	)
		.then((response) => response.json())
        .then((data) => {
                console.log(data)
                cityName.innerText = data.name;
    
                temp.innerText = Math.floor(data.main.temp) + " °C";
    
                let iconName = data.weather[0].icon
                icon.src = "http://openweathermap.org/img/wn/" + iconName + "@2x.png"
    
                hum.innerText = data.main.humidity + " %"
                imgHumidity.src = "./Images/humidity.png"
                humidity.parentNode.insertBefore(imgHumidity, humidity)
                imgHumidity.style.width = '1.35em'
                imgHumidity.style.height = '1.35em'
                imgHumidity.style.margin = '0.5em'
    
                wSpeed.innerText = data.wind.speed + " m/s";
                imgWind.src = "./Images/wind.png"
                wSpeed.parentNode.insertBefore(imgWind, wSpeed)
                imgWind.style.width = '1.35em'
                imgWind.style.height = '1.35em'
                imgWind.style.margin = '0.5em'
    
                let dSunrise = new Date(data.sys.sunrise * 1000)
                sunrise.innerText = dSunrise.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                imgSunrise.src = "./Images/sunrise.png"
                sunrise.parentNode.insertBefore(imgSunrise, sunrise)
                imgSunrise.style.width = '1.35em'
                imgSunrise.style.height = '1.35em'
                imgSunrise.style.margin = '0.5em'
    
                let dSunset = new Date(data.sys.sunset * 1000)
                sunset.innerText = dSunset.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                imgSunset.src = "./Images/sunset.png"
                sunset.parentNode.insertBefore(imgSunset, sunset)
                imgSunset.style.width = '1.35em'
                imgSunset.style.height = '1.35em'
                imgSunset.style.margin = '0.5em'
            }).catch((err) => {
                //alert("Invalid city name ! Please try again.");
                cityName.textContent = "Invalid city name ! Please try again."
                humidity.textContent = "-"
                wSpeed.textContent = "-"
                sunrise.textContent = "-"
                sunset.textContent = "-"
                temp.textContent = "-"
                imgHumidity.src = "-"
                imgSunrise.src = "-"
                imgSunset.src = "-"
                imgWind.src = "-"
                icon.src = "-"
                })
});








