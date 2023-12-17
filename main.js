let spans = document.querySelectorAll(".range span");

let skills = document.querySelector(".skills");

let cards = document.querySelectorAll(".scores .container .card");
let score = document.querySelector(".scores");
cards.forEach((it) => {
  it.children[0].innerText = "0";
});

let t = false;
window.onscroll = () => {
  if (window.scrollY >= skills.offsetTop - 520) {
    spans.forEach((li) => {
      li.style.width = li.getAttribute("data-range");
    });
  }
  if (window.scrollY >= score.offsetTop - 200) {
    if (!t) {
      cards.forEach((li) => {
        let goal = li.dataset.max;
        let count = setInterval(() => {
          li.children[0].innerText++;
          if (li.children[0].innerText == goal) {
            clearInterval(count);
          }
          t = true;
        }, 1000 / goal);
        t = true;
      });
    }
  }
};
