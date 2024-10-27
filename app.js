var nextBtn = document.querySelector('.next'),
  prevBtn = document.querySelector('.prev'),
  carousel = document.querySelector('.carousel'),
  list = document.querySelector('.list'),
  item = document.querySelectorAll('.item'),
  runningTime = document.querySelector('.carousel .timeRunning')

let timeRunning = 3000
let timeAutoNext = 7000

nextBtn.onclick = function () {
  showSlider('next')
}

prevBtn.onclick = function () {
  showSlider('prev')
}

let runTimeOut

let runNextAuto = setTimeout(() => {
  nextBtn.click()
}, timeAutoNext)

function resetTimeAnimation() {
  runningTime.style.animation = 'none'
  runningTime.offsetHeight /* trigger reflow */
  runningTime.style.animation = null
  runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}

function showSlider(type) {
  let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
  if (type === 'next') {
    list.appendChild(sliderItemsDom[0])
    carousel.classList.add('next')
  } else {
    list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
    carousel.classList.add('prev')
  }

  clearTimeout(runTimeOut)

  runTimeOut = setTimeout(() => {
    carousel.classList.remove('next')
    carousel.classList.remove('prev')
  }, timeRunning)

  clearTimeout(runNextAuto)
  runNextAuto = setTimeout(() => {
    nextBtn.click()
  }, timeAutoNext)

  resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation
resetTimeAnimation()

// Counter function
function animateCounter() {
  const counters = document.querySelectorAll('.count')
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target')
      const count = +counter.innerText
      const increment = target / 100 // Adjust for faster/slower counting

      if (count < target) {
        counter.innerText = Math.ceil(count + increment)
        setTimeout(updateCount, 20)
      } else {
        counter.innerText = target
      }
    }
    updateCount()
  })
}

// Function to activate the stats section animation
function activateStats() {
  const statsSection = document.querySelector('#stats')
  const stats = document.querySelectorAll('.stat')
  const sectionPosition = statsSection.getBoundingClientRect().top
  const screenPosition = window.innerHeight / 1.2

  if (sectionPosition < screenPosition) {
    stats.forEach((stat) => stat.classList.add('active'))
    animateCounter()
    window.removeEventListener('scroll', activateStats)
  }
}

window.addEventListener('scroll', activateStats)

// JavaScript to animate the counting effect
document.addEventListener('DOMContentLoaded', function () {
  const counters = document.querySelectorAll('.stat-number')
  const speed = 200 // Adjust the speed of the counting animation

  counters.forEach((counter) => {
    const animateCount = () => {
      const target = +counter.getAttribute('data-target')
      const count = +counter.innerText
      const increment = target / speed

      if (count < target) {
        counter.innerText = Math.ceil(count + increment)
        setTimeout(animateCount, 10)
      } else {
        counter.innerText = target
      }
    }

    animateCount()
  })
})

let currentIndex = 0
const cards = document.querySelectorAll('.event-card')

const showCard = (index) => {
  cards.forEach((card, i) => {
    card.style.opacity = '0'
    card.style.transform = 'translateY(20px)'
  })
  const activeCard = cards[index]
  activeCard.style.opacity = '1'
  activeCard.style.transform = 'translateY(0)'
}

// Function to cycle through cards
const cycleCards = () => {
  currentIndex = (currentIndex + 1) % cards.length // Move to the next card
  showCard(currentIndex)
}

// Show the first card initially
showCard(currentIndex)

// Change card every 5 seconds (5000 milliseconds)
setInterval(cycleCards, 7000)
