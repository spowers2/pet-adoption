async function getWData() {
  const weatherPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast")
  const weatherData = await weatherPromise.json()
  //console.log(weatherData.properties.periods[0].temperature)
  const temp = weatherData.properties.periods[0].temperature
  document.querySelector("#temperature-output").innerHTML = temp
}
getWData()
//learnwebcode.github.io/bootcamp-pet-data/pets.json
async function getPetData() {
  const petPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
  const petData = await petPromise.json()
  //console.log(petData)
  //document.querySelector("#pet-output").innerHTML = petData[0].name
  petData.forEach(element => {
    console.log(element.species)
  })
}
getPetData()
