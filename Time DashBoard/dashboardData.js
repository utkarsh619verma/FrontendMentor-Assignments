const setTimeData = (schedule) => {
  const curr_time = document.querySelectorAll(".curr_time");
  const prev_time = document.querySelectorAll(".prev_time");
  fetch("./time-tracking-dashboard-main/data.json")
    .then((response) => response.json())
    .then((data) => {
      const arr = data.map((element, index) => {
        prev_time[index].innerText =
          "Last Week -" + element.timeframes[schedule].previous + "hrs";
        curr_time[index].innerText =
          element.timeframes[schedule].current + "hrs";
      });
    });
};

const buttons = document.querySelectorAll(".schedule-card button");
buttons.forEach((element) => {
  element.addEventListener("click", (e) => {
    setTimeData(e.target.value);
  });
});
