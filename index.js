const timer = document.getElementById('timer-second')
const minutes = document.getElementById('timer-minute')
const hours = document.getElementById('timer-hour')
let elapsedTime = 0;
let elapsedMinutes = 0
let elapsedHours = 0

let timerUpdate = null;
function updateTimer() {
    if (timerUpdate == null) {

        timerUpdate = setInterval(() => {
            elapsedTime ++;
            if (elapsedTime > 60) {
                elapsedMinutes++

                elapsedTime = 0
                document.getElementById('timer-minute').innerText = elapsedMinutes
                document.getElementById('timer-second').innerText = elapsedTime


            }
            if (elapsedMinutes > 60) {
                elapsedHours++
                elapsedTime = 0
                elapsedMinutes = 0
                document.getElementById('timer-hour').innerText = elapsedHours
                document.getElementById('timer-minute').innerText = elapsedMinutes
                document.getElementById('timer-second').innerText = elapsedTime

            }
            timer.innerText = elapsedTime;
        }, 1000)
    }

}


document.getElementById('stop').addEventListener('click', () => {
    clearInterval(timerUpdate)
    timerUpdate = null
})

document.getElementById('start').addEventListener("click", () => {
    updateTimer()
})

document.getElementById('reset').addEventListener("click", () => {
    timer.innerText = '00'
    minutes.innerText = '00'
    hours.innerText = '00'
    clearInterval(timerUpdate)
    timerUpdate = null
    elapsedTime = 0;
    elapsedMinutes = 0
    elapsedHours = 0
})