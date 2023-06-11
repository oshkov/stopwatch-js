// Кнопки
let btnStartStop = document.querySelector(".btn-start-stop")
let btnClear = document.querySelector(".btn-clear")

// Блоки с минутами, секундами и миллисекундами
let minutesBlock = document.querySelector(".stopwatch-minutes")
let secondsBlock = document.querySelector(".stopwatch-seconds")
let millisecondsBlock = document.querySelector(".stopwatch-milliseconds")

// Переменные времени
let interval
let intervalCheck = 0 // 1 - секундоменр включен / 0 - выключен
let minutes = 0
let seconds = 0
let milliseconds = 0

// Работа секундомера
const startTimer = () => {
    milliseconds++ // Увеличение миллисекунд

    if (milliseconds === 100) {
        milliseconds = 0 // Обнуление миллисекунд
        seconds++ // Увеличение секунд
        if (seconds === 60) {
            seconds = 0 // Обнуление секунд
            secondsBlock.innerHTML = "0" + seconds
            minutes++ // Увеличение минут

             // Добавления нуля, если минут менее 9
            if (minutes > 9) {
                minutesBlock.innerHTML = minutes
            } else{
                minutesBlock.innerHTML = "0" + minutes
            }

        } else if (seconds > 9) { // Добавления нуля, если секунд менее 9
            secondsBlock.innerHTML = seconds
        } else{
            secondsBlock.innerHTML = "0" + seconds
        }

    } else if (milliseconds > 9) { // Добавления нуля, если миллисекунд менее 9
        millisecondsBlock.innerHTML = milliseconds
    } else{
        millisecondsBlock.innerHTML = "0" + milliseconds
    }

   
}

// Обработка нажатия на кнопку Старт/Стоп
btnStartStop.addEventListener("click", () => {
    if (intervalCheck === 0) {
        clearInterval(interval) // Обнуления интервала
        interval = setInterval(startTimer, 10) // Задается интервал в 1 миллисекунду и запускается секундомер
        intervalCheck = 1

        btnStartStop.textContent = "Стоп" // Изменяется кнопка
    } else {
        clearInterval(interval) // Обнуления интервала
        intervalCheck = 0

        btnStartStop.textContent = "Старт" // Изменяется кнопка
    }
});

// Обработка нажатия на кнопку Очистить
btnClear.addEventListener("click", () => {
    clearInterval(interval) // Обнуления интервала
    intervalCheck = 0
    btnStartStop.textContent = "Старт" // Изменяется кнопка

    // Обнуление блоков
    millisecondsBlock.innerHTML = "00"
    secondsBlock.innerHTML = "00"
    minutesBlock.innerHTML = "00"

    // Обнуление переменных
    minutes = 0
    seconds = 0
    milliseconds = 0
});