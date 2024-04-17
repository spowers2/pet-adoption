const template = document.querySelector("#pet-card-template")
const wrapper = document.createDocumentFragment()

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
  petData.forEach(element => {
    const clone = template.content.cloneNode(true)
    clone.querySelector("h3").textContent = element.name
    clone.querySelector(".pet-description").textContent = element.species
    clone.querySelector("img").src = element.photo
    clone.querySelector(".pet-age").textContent = element.age
    wrapper.appendChild(clone)
  })
  document.querySelector(".list-of-pets").appendChild(wrapper)
}
getPetData()
