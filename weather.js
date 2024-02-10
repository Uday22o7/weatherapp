const City = document.querySelector('#search')
const Form = document.querySelector('.search-form')
const Title = document.querySelector('.Title')
const Teamprature = document.querySelector('.TEMP')
const tempp = document.querySelector('.temp')
const mintemp = document.querySelector('.mintemp')
const maxtemp = document.querySelector('.maxtemp')
const Humidity = document.querySelector('.Humidity')
const Wind_deg = document.querySelector('.wind-deg')
const Feels_like = document.querySelector('.feels')
const humip = document.querySelector('.humip')
const Wind = document.querySelector('.Wind')
const Windp = document.querySelector('.Windp')
const Sunrise = document.querySelector('.sunrise')
const Cloud = document.querySelector('.cloud')
const date = document.querySelector('.Date')


Form.addEventListener("submit", (e) => {
	e.preventDefault();
	Title.innerText = `Weather for ${City.value}`;
	const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${City.value}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '0c5bee871fmsh710594e951270a9p169398jsn837c93915c14',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	const weatherinfo = async () => {
		try {
			const response = await fetch(url, options);
			const result = await response.json();
			console.log(result);
			Teamprature.innerText = result.temp;
			tempp.innerText = `Temperature is ${result.temp}`;
			mintemp.innerText = `Min Temperature is ${result.min_temp}`;
			maxtemp.innerText = `Max Temperature is ${result.max_temp}`;
			Humidity.innerText = result.humidity;
			Wind_deg.innerText = `Wind degree is ${result.wind_degrees}`;
			Feels_like.innerText = `Feels Like ${result.feels_like}`;
			humip.innerText = `Humidity is ${result.humidity}`;
			Wind.innerText = result.wind_speed;
			Windp.innerText = `Wind speed is ${result.wind_speed}`;
			Sunrise.innerText = `Sunrise Time is ${result.sunrise}`;
			Cloud.innerText = `Cloud pct is ${result.cloud_pct}`;

		} catch (error) {
			console.error(error);
		}

	}

	weatherinfo();


})

Form.addEventListener("submit", (e) => {
	e.preventDefault();
	const url = `https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime?city=${City.value}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '0c5bee871fmsh710594e951270a9p169398jsn837c93915c14',
			'X-RapidAPI-Host': 'world-time-by-api-ninjas.p.rapidapi.com'
		}
	};
	const getTime = async () => {
		try {
			const response = await fetch(url, options);
			const resultTime = await response.json();
			console.log(resultTime);
			date.innerText = `${resultTime.day_of_week} 
				
			${resultTime.date} / ${resultTime.hour}:${resultTime.minute}`;


		} catch (error) {
			console.error(error);
		}
	}
	getTime()

	City.value = ""
})




