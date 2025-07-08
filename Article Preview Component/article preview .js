const shareBar = document.querySelector(".sub-share");
const shareBtn = document.querySelector(".share-button");
shareBtn.addEventListener("click", () => {
  shareBar.classList.toggle("hidden");
});
