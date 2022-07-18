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


btn.addEventListener("click", () => {
	let city = document.getElementById("city").value;
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d7314495091e5a59a46e480759172ae2&units=metric`
	)
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
			let iconName = data.weather[0].icon
			cityName.innerText = data.name;
			temp.innerText = Math.floor(data.main.temp) + " °C";

			//Trying to toggle css classes and change backgrounds depends of temperature. Doesn't work for now.

			// if (data.main.temp <= 20) {
			// 	let bg = document.getElementById("bg-basic")
			// 	bg.classList.toggle("bg-cold")
			// } else if (data.main.temp >= 21 && data.main.temp <= 35) {
			// 	document.body.classList.toggle("bg-hot")
			// } else if (data.main.temp > 35) {
			// 	document.body.classList.toggle("bg-dangerous-hot")
			// }

			icon.src = "http://openweathermap.org/img/wn/" + iconName + "@2x.png"
			hum.innerText = "Humidity: " + data.main.humidity + "%";
			wSpeed.innerText = "Wind: " + data.wind.speed + " m/s";
			// sunrise.innerText = new Date(data.sys.sunrise * 1000)
		});

	let today = new Date()
	let dayOfWeekName = today.toLocaleString('default', { weekday: 'long' })
	let monthName = today.toLocaleString('default', { month: 'long' })
	let date = `${dayOfWeekName},  ${monthName}  ${today.getDate()}, ${today.getFullYear()}`
	currentDate.innerHTML = date
});








