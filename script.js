let mainElement = document.querySelector('#main');
let circles = document.querySelectorAll('.skillDetail');
let buttonsContainer = document.querySelector('#buttonsContainer');
console.log(circles);

let percentages = document.querySelectorAll('.percentage');
let labels = document.querySelectorAll('.labels');
console.log(labels);
let opacity = 0.1;

console.log(mainElement.children[3].getBoundingClientRect());
console.log(buttonsContainer.children);

// buttonsContainer.style.top = mainElement.children[3].getBoundingClientRect().bottom + 'px';

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
          // console.log(percentages[i].textContent);
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