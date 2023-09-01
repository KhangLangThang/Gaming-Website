const header = document.querySelector("header");
// sticky
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
// chosen from
const list = document.querySelectorAll(".list");
const card = document.querySelectorAll(".card");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");
    const datafill = this.getAttribute("datafill");
    for (let k = 0; k < card.length; k++) {
      // card[k].classList.remove("active");
      if (card[k].getAttribute("datafill") != "group") {
        card[k].classList.add("hidden");
      }

      if (card[k].getAttribute("datafill") == datafill || datafill == "all") {
        card[k].classList.remove("hidden");
      }
    }
  });
}
// Repsonsive Navigation

function menuBar() {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav");

  nav.classList.toggle("active");
}
// animation sroll
window.addEventListener("scroll", function () {
  const anime_sroll = document.querySelectorAll(".anime_sroll");
  for (let i = 0; i < anime_sroll.length; i++) {
    const windowHeight = window.innerHeight;
    const animetop = anime_sroll[i].getBoundingClientRect().top;
    const animepoint = 150;
    if (animetop < windowHeight - animepoint) {
      console.log(windowHeight);
      anime_sroll[i].classList.add("active");
    } else {
      anime_sroll[i].classList.remove("active");
    }
  }
});
