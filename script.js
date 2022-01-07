let mainElement = document.querySelector('#main');
let circles = document.querySelectorAll('.skillDetail');
let buttonsContainer = document.querySelector('#buttonsContainer');
let containerFour = document.querySelector('#containerFour');

let works = document.querySelectorAll('.works');
let buttons = buttonsContainer.children;


let percentages = document.querySelectorAll('.percentage');
let labels = document.querySelectorAll('.labels');
let opacity = 0.1;

mainElement.addEventListener('scroll', () => {
  if (window.pageYOffset > sections[2].getBoundingClientRect().y) {
    let promise = new Promise(resolve => {
      setTimeout(() => {
        for (let circle of circles) {
          let middle = circle.clientHeight / 2;
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
});

buttonsContainer.children[0].style.color = "rgb(7, 123, 244)";

containerFour.addEventListener('scroll', () => {
  for (let i = 0; i < works.length; i++) {
    buttons[i].style.color = "rgb(12, 61, 248)";
    // buttons[i].style.color = "rgb(8, 21, 145)";
    // buttons[i].style.fontSize = "30px";
    if (containerFour.scrollLeft > works[i].offsetLeft - 5 && containerFour.scrollLeft < works[i].offsetLeft + works[i].clientWidth - 5) {
      // console.log('page two');
      buttons[i].style.color = "rgb(7, 123, 244)";
      // buttons[i].style.fontSize = "34px";
    }
  }
  // if (containerFour.scrollLeft > works[1].offsetLeft - 5 && containerFour.scrollLeft < works[2].offsetLeft) {
  //   console.log('page two');
  // } else if (containerFour.scrollLeft > works[2].offsetLeft - 5 && containerFour.scrollLeft < works[3].offsetLeft) {
  //   console.log('page three');
  // } else if (containerFour.scrollLeft > works[3].offsetLeft - 5) {
  //   console.log('page four');
  // }
});

buttonsContainer.addEventListener('click', (event) => {
  for (let button of buttons) {
    if (event.target == button) {
      // button.style.color = "rgb(7, 123, 244)";
      containerFour.scrollTo({
        top: 0,
        left: works[Array.from(event.target.parentElement.children).indexOf(event.target)].offsetLeft,
        behavior: "smooth"
      });
    }
    // else {
    //   button.style.color = "rgb(12, 61, 248)";
    // }
  }
});