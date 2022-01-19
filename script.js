let mainElement = document.querySelector('#main');
let circles = document.querySelectorAll('.skillDetail');
let buttonsContainer = document.querySelector('#buttonsContainer');
let containerFour = document.querySelector('#containerFour');
let works = document.querySelectorAll('.works');
let buttons = buttonsContainer.children;
let percentages = document.querySelectorAll('.percentage');
let labels = document.querySelectorAll('.labels');
let opacity = 0.1;
let returnBtn = document.querySelector('#returnBtn');

let scrollDownInd = document.querySelector('#scrolldownIndicator');

mainElement.addEventListener('scroll', () => {
  if (window.pageYOffset > sections[2].getBoundingClientRect().y) {
    let promise = new Promise(resolve => {
      setTimeout(() => {
        for (let circle of circles) {
          circle.style.borderRadius = `100%`;
          circle.style.transform = `scale(1.0)`;
          resolve();
        }
      }, 500);
    }).then(() => {

      let limits = [80, 90, 70, 80, 60, 50];

      for (let i = 0; i < circles.length; i++) {
        circles[0].style.backgroundPosition = "100% 55%";
        circles[1].style.backgroundPosition = "100% 65%";
        circles[2].style.backgroundPosition = "100% 45%";
        circles[3].style.backgroundPosition = "100% 55%";
        circles[4].style.backgroundPosition = "100% 35%";
        circles[5].style.backgroundPosition = "100% 25%";
        circles[i].style.animation = `moveliquid 3s ease-in-out 1`;

        // migliorabile
        let increaseOpacity = setInterval(() => {
          percentages[i].textContent = `${Number(percentages[i].textContent.slice(0, percentages[i].textContent.length - 1)) + (3)}%`;
          if (Number(percentages[i].textContent.slice(0, percentages[i].textContent.length - 1)) > limits[i]) {
            percentages[i].textContent = `${limits[i]}%`;
          }
          labels[i].style.opacity = opacity;
          percentages[i].style.opacity = opacity;
          opacity = opacity + 0.005;
          if (opacity >= 1.0) {
            clearInterval(increaseOpacity);
            opacity = 1.0;
          }
        }, 100);
        // migliorabile
      }
    });
  }

  if (window.pageYOffset >= sections[4].getBoundingClientRect().y) {
    returnBtn.style.display = "grid";
    returnBtn.style.position = 'absolute';
    // returnBtn.style.right = mainElement.clientWidth - mainElement.clientWidth / 1.3 + "px";
    returnBtn.style.right = mainElement.clientWidth / 12 + "px";
    returnBtn.style.bottom = "1%";
  } else if (window.pageYOffset < sections[4].getBoundingClientRect().y) {
    returnBtn.style.display = "none";
  }
});

// scrollDownInd.style.bottom = "25%";

buttonsContainer.children[0].style.color = "rgb(7, 123, 244)";

containerFour.addEventListener('scroll', () => {
  for (let i = 0; i < works.length; i++) {
    buttons[i].style.color = "rgb(12, 61, 248)";
    if (containerFour.scrollLeft > works[i].offsetLeft - 5 && containerFour.scrollLeft < works[i].offsetLeft + works[i].clientWidth - 5) {
      buttons[i].style.color = "rgb(7, 123, 244)";
    }
  }

});

buttonsContainer.addEventListener('click', (event) => {
  for (let button of buttons) {
    if (event.target == button) {
      containerFour.scrollTo({
        top: 0,
        left: works[Array.from(event.target.parentElement.children).indexOf(event.target)].offsetLeft,
        behavior: "smooth"
      });
    }
  }
});

let myYears = Math.floor((Date.now() - new Date("1989-12-09")) / (100 * 315569262));
let ageLabel = document.querySelectorAll('.myDatas')[0];
ageLabel.textContent = myYears;

returnBtn.addEventListener('click', () => {
  mainElement.scrollTo({
    top: sections[0].getBoundingClientRect().y,
    left: sections[0].getBoundingClientRect().x,
    behavior: "smooth"
  });
});