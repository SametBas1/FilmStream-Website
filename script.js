const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
arrows.forEach((arrow, i) => {
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll("img").length;
  console.log(imageItem); 
  arrow.addEventListener("click", function () {
    if (clickCounter < 3) {
      clickCounter++;
      const currentTransform = window.getComputedStyle(movieLists[i]).transform;
      let currentTranslateX = 0;
      if (currentTransform !== "none") {
        const matrix = currentTransform
          .match(/matrix.*\((.+)\)/)[1]
          .split(", ");
        currentTranslateX = parseFloat(matrix[4]);
      }
      const newTranslateX = currentTranslateX - 300;
      movieLists[i].style.transform = `translateX(${newTranslateX}px)`;
    }
    if (clickCounter === 3) {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});
/*dark mode*/
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container, .navbar, .sidebar, .sidebar i , .toggle , .toggle-ball, .movie-list-filter select ,.movie-list-title"

);

ball.addEventListener("click", function () {
    items.forEach((item) => item.classList.toggle("active"));
});
