//https://api.openweathermap.org/data/2.5/forecast?q=London,us&units=metric&appid=4bb8bcae8e83902cb220afdef45bc1c8

const key = "4bb8bcae8e83902cb220afdef45bc1c8";

const getForecast = async (city) => {
	const base =  "https://api.openweathermap.org/data/2.5/forecast"
	const query = `?q=${city}&units=metric&appid=${key}`;
	
	const response = await fetch(base+query);
	
//	console.log(response);
	
	if(!response.ok)
		throw new Error("Status Code:" + response.status);
	
	const data = await response.json();
//	console.log(data);
	return data;
}

getForecast('Mumbai')
.then(data => console.log(data))
.catch(err => console.warn(err));

