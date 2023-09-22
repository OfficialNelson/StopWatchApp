window.onload = function() {
  // --- vars to access html elements --- //
  let tens = 0;
  let seconds = 0;
  let minutes = 0;

  let appendTens = document.getElementById("tens");
  let appendSeconds = document.getElementById("seconds");
  let appendMinutes = document.getElementById('minutes');

  let buttonStart = document.getElementById("button-start");
  let buttonStop = document.getElementById("button-stop");
  let buttonReset = document.getElementById("button-reset");

  let Interval;

  // --- functions to start, stop, reset --- //
  buttonStart.onclick = function() {
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
  }

  buttonStop.onclick = function() {
      clearInterval(Interval);
  }

  buttonReset.onclick = function() {
      clearInterval(Interval);
      tens = "00";
      seconds = "00";
      minutes = "00";
      appendTens.innerHTML = tens;
      appendSeconds.innerHTML = seconds;
      appendMinutes.innerHTML = minutes;
  }

  function startTimer() {
      tens++;

      if (tens <= 9) {
          appendTens.innerHTML = "0" + tens;
      } else {
          appendTens.innerHTML = tens;
      }

      if (tens > 99) {
          seconds++;
          appendSeconds.innerHTML = seconds <= 9 ? "0" + seconds : seconds;
          tens = 0;
          appendTens.innerHTML = "00";
      }

      if (seconds > 59) {
          minutes++;
          appendMinutes.innerHTML = minutes <= 9 ? "0" + minutes : minutes;
          seconds = 0;
          appendSeconds.innerHTML = "00";
      }
  }
};
