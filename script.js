let btnStartStop = document.querySelector(".btn-start-stop")
let btnStop = document.querySelector(".btn-stop")
let btnClear = document.querySelector(".btn-clear")

let minutesBlock = document.querySelector(".stopwatch-minutes")
let secondsBlock = document.querySelector(".stopwatch-seconds")
let millisecondsBlock = document.querySelector(".stopwatch-milliseconds")

let interval
let intervalCheck = 0
let minutes = 0
let seconds = 0
let milliseconds = 0

const startTimer = () => {
    milliseconds++

    if (milliseconds === 100) {
        milliseconds = 0
        seconds++
        if (seconds === 60) {
            seconds = 0
            secondsBlock.innerHTML = "0" + seconds
            minutes++

            if (minutes > 9) {
                minutesBlock.innerHTML = minutes
            } else{
                minutesBlock.innerHTML = "0" + minutes
            }

        } else if (seconds > 9) {
            secondsBlock.innerHTML = seconds
        } else{
            secondsBlock.innerHTML = "0" + seconds
        }
    } else if (milliseconds > 9) {
        millisecondsBlock.innerHTML = milliseconds
    } else{
        millisecondsBlock.innerHTML = "0" + milliseconds
    }

   
}

btnStartStop.addEventListener("click", () => {
    if (intervalCheck === 0) {
        clearInterval(interval)
        interval = setInterval(startTimer, 10)
        intervalCheck = 1

        btnStartStop.textContent = "Стоп"
    } else {
        clearInterval(interval)
        intervalCheck = 0

        btnStartStop.textContent = "Старт"
    }
});

btnClear.addEventListener("click", () => {
    clearInterval(interval)
    intervalCheck = 0
    btnStartStop.textContent = "Старт"

    millisecondsBlock.innerHTML = "00"
    secondsBlock.innerHTML = "00"
    minutesBlock.innerHTML = "00"

    minutes = 0
    seconds = 0
    milliseconds = 0
});