import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputC = document.querySelector('#datetime-picker');
const startCountdownButton = document.querySelector('button');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

document.addEventListener('DOMContentLoaded', () => {
    startCountdownButton.disabled = true;
});

let userSelectedDate = '';

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
        iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
        });
        startCountdownButton.disabled = true;
        } else {
        startCountdownButton.disabled = false;
        userSelectedDate = selectedDates[0];
        }
    },
};

const datePicker = flatpickr(inputC, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

  // Remaining days
    const days = Math.floor(ms / day);
  // Remaining hours
    const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

startCountdownButton.addEventListener('click', countdown);

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}

function countdown() {
    const selectedDateTime = userSelectedDate.getTime();
    const intervalId = setInterval(() => {
    const currentDateTime = new Date();
    const difference = selectedDateTime - currentDateTime;
    const { days, hours, minutes, seconds } = convertMs(difference);

    if (difference <= 0) {
        clearInterval(intervalId);
        dataDays.textContent = '00';
        dataHours.textContent = '00';
        dataMinutes.textContent = '00';
        dataSeconds.textContent = '00';
    } else {
        const formattedDays = addLeadingZero(days);
        const formattedHours = addLeadingZero(hours);
        const formattedMinutes = addLeadingZero(minutes);
        const formattedSeconds = addLeadingZero(seconds);

        dataDays.textContent = formattedDays;
        dataHours.textContent = formattedHours;
        dataMinutes.textContent = formattedMinutes;
        dataSeconds.textContent = formattedSeconds;
    }
  }, 1000);
}