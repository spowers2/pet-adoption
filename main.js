const template = document.querySelector("#pet-card-template")
const wrapper = document.createDocumentFragment()

async function getWData() {
  const weatherPromise = await fetch("https://api.weather.gov/gridpoints/AKQ/58,99/forecast/")
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
  petData.forEach(pet => {
    const clone = template.content.cloneNode(true)
    clone.querySelector(".pet-card").dataset.species = pet.species
    clone.querySelector("h3").textContent = pet.name
    clone.querySelector(".pet-description").textContent = pet.description
    if (!pet.photo) pet.photo = "images/fallback.jpg"
    clone.querySelector(".pet-card-photo img").src = pet.photo
    clone.querySelector(".pet-card-photo img").alt = `Photo of ${pet.name} the ${pet.species}`
    clone.querySelector(".pet-age").textContent = createAgeText(pet.birthYear)
    wrapper.appendChild(clone)
  })
  document.querySelector(".list-of-pets").appendChild(wrapper)
}

getPetData()

function createAgeText(birthYear) {
  const age = new Date().getFullYear() - birthYear
  if (age === 1) {
    return "1 year old"
  } else if (age === 0) {
    return "Your new baby! Less than 1 year old"
  } else {
    return `${age} years old`
  }
}

//pet filter button code

const allButtons = document.querySelectorAll(".pet-filter button")
allButtons.forEach(el => {
  el.addEventListener("click", handleButtonClick)
})
function handleButtonClick(e) {
  //remove active class from any and all buttons
  allButtons.forEach(el => el.classList.remove("active"))
  //add active class to the button that was clicked
  e.target.classList.add("active")

  //actually filter the pets down below
  const currentFilter = e.target.dataset.filter
  document.querySelectorAll(".pet-card").forEach(card => {
    if (currentFilter == card.dataset.species || currentFilter == "all") {
      card.style.display = "grid"
    } else {
      card.style.display = "none"
    }
  })
}
