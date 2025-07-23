const createCard = (element, schedule) => {
  const card = document.createElement("div");
  const title = document.createElement("p");
  const curr_time = document.createElement("h1");
  const prev_time = document.createElement("p");
  const option_button = document.createElement("button");
  const option_button_img = document.createElement("img");
  const cover_img = document.createElement("img");
  const card_content = document.createElement("div");
  const div = document.createElement("div");
  const div2 = document.createElement("div");
  //SETTING ATTRIBUTES AND VALUES
  option_button_img.setAttribute(
    "src",
    "./time-tracking-dashboard-main/images/icon-ellipsis.svg"
  );
  title.innerText = element.title;
  card.style.backgroundColor = element.color;
  cover_img.setAttribute("src", element.img);
  curr_time.setAttribute("data-type", "daily");
  prev_time.setAttribute("data-type", "daily");
  curr_time.innerText = element.timeframes.daily.current + "hrs";
  prev_time.innerText =
    "Last Week -" + element.timeframes.daily.previous + "hrs";
  //APPENDING CHILDREN
  option_button.appendChild(option_button_img);
  div.append(title, option_button);
  div2.append(curr_time, prev_time);
  card_content.append(div, div2);
  card.appendChild(cover_img);
  card.appendChild(card_content);

  //adding styles and classes
  card.classList.add("card");
  div.classList.add("header");
  div2.classList.add("card-footer");
  card_content.classList.add("content");
  option_button.classList.add("options-button");
  prev_time.classList.add("prev_time");
  curr_time.classList.add("curr_time");
  return card;
};

const generateUI = (schedule) => {
  const container = document.querySelector(".main-container");
  fetch("./time-tracking-dashboard-main/data.json")
    .then((response) => response.json())
    .then((data) => {
      data.map((element) => {
        const card = createCard(element, schedule);
        card.classList.add("card");
        container.appendChild(card);
      });
    });
};

generateUI("daily");
