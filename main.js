async function getWData() {
  const weatherPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast")
  const weatherData = await weatherPromise.json()
  //console.log(weatherData.properties.periods[0].temperature)
  const temp = weatherData.properties.periods[0].temperature
  document.querySelector("#temperature-output").innerHTML = temp
}
getWData()
