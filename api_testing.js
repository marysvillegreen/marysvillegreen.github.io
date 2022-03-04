fetch("https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Marysville&state=Ohio&country=United%20States", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "air-quality-by-api-ninjas.p.rapidapi.com",
        "x-rapidapi-key": "98f22c2196mshce628127e4e6c54p1bffafjsnce4999408b21"
    }
})
.then(response => response.json())
.then(response => {
    console.log(response);
    document.getElementById('aqi').innerHTML = "Air quality Index- " + response.overall_aqi;
	document.getElementById('pm10').innerHTML = "PM10 value- " + response.overall_aqi;
    document.getElementById('Carbon_Monoxide').innerHTML = "Carbon Monoxide- " + response.CO.concentration;
    document.getElementById('Nitrogen_Dioxide').innerHTML = "Nitrogen Dioxide-" + response.NO2.concentration;
})
.catch(err => {
    console.error(err);
});

