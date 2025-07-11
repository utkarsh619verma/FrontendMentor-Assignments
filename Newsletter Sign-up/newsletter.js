window.addEventListener("resize", () => {
  let img = document.querySelector(".banner>img");
  if (screen.width < 1000) {
    img.setAttribute(
      "src",
      "./newsletter-sign-up-with-success-message-main/assets/images/illustration-sign-up-mobile.svg"
    );
  } else
    img.setAttribute(
      "src",
      "./newsletter-sign-up-with-success-message-main/assets/images/illustration-sign-up-desktop.svg"
    );
});
