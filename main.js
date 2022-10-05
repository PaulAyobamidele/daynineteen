const hourEl = document.querySelector('.hour')
const minuteEL = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEL = document.querySelector('.date')
const toggle = document.querySelector('.toggle')



const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday"];


const months = ["Jan", "Feb", "Mar", ]


toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML ='Dark mode'
    }else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})


function setTime() {
    const time =  new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const hours = time.getHours()
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
}

setTime()