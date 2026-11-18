const track = document.querySelector(".cards");
const preBtn = document.getElementById("preBtn");
const nextBtn = document.getElementById("nextBtn");

const getScrollAmount = () => {
  const card = track.querySelector(".card");
  return card ? card.offsetWidth + 16 : 276;
};

nextBtn.addEventListener("click", () => {
  track.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
});

preBtn.addEventListener("click", () => {
  track.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
});

const updateButtons = () => {
  preBtn.disabled = track.scrollLeft <= 0;

  const maxScroll = track.scrollWidth - track.clientWidth - 1;
  nextBtn.disabled = track.scrollLeft >= maxScroll;
};

track.addEventListener("scroll", updateButtons);
window.addEventListener("resize", updateButtons);

updateButtons();
