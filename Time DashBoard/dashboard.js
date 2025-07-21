const createCard = (element) => {
  const card = document.createElement("div");
  const title = document.createElement("p");
  const curr_time = document.createElement("h1");
  const prev_time = document.createElement("p");
  const option_button = document.createElement("button");
  const option_button_img = document.createElement("img");
  const cover_img = document.createElement("img");
  const card_content = document.createElement("div");
  const div = document.createElement("div");
  //
  title.innerText = element.title;
  curr_time.innerText = element.timeframes.weekly.current + "hrs";
  prev_time.innerText =
    "Last Week -" + element.timeframes.weekly.previous + "hrs";
  option_button_img.setAttribute(
    "src",
    "./time-tracking-dashboard-main/images/icon-ellipsis.svg"
  );
  card.style.backgroundColor = element.color;
  cover_img.setAttribute("src", element.img);
  option_button.appendChild(option_button_img);

  div.append(title, option_button);
  card_content.append(div, curr_time, prev_time);
  card.appendChild(cover_img);
  card.appendChild(card_content);

  //adding styles and classes
  card.classList.add("card");
  div.classList.add("header");
  card_content.classList.add("content");
  option_button.classList.add("options-button");
  prev_time.classList.add("footer");
  curr_time.classList.add("curr_time");
  return card;
};

const container = document.querySelector(".main-container");

fetch("./time-tracking-dashboard-main/data.json")
  .then((response) => response.json())
  .then((data) => {
    data.map((element) => {
      const card = createCard(element);
      card.classList.add("card");
      container.appendChild(card);
    });
  });
