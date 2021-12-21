// let bkgCanvasContainer = document.querySelector('#bkgCanvasContainer');
// console.log(bkgCanvasContainer);

let mainElement = document.querySelector('#main');
// console.log(mainElt);

let circles = document.querySelectorAll('.skillDetail');
console.log(circles);

mainElement.addEventListener('scroll', () => {
  if (window.pageYOffset > sections[2].getBoundingClientRect().y) {
    let promise = new Promise(resolve => {
      setTimeout(() => {
        for (let circle of circles) {
          let middle = circle.clientHeight / 2;
          // circle.style.width = "12vh";
          // circle.style.height = "12vh";
          // circle.style.height = `100%`;
          // circle.style.background = `conic-gradient(from 270deg at 50% 100%, transparent, 180deg, white 180deg 181deg, rgb(12, 61, 248) 181deg 360deg)`
          circle.style.borderRadius = `100%`;
          // circle.style.transform = `translate(0px, ${middle}px) scale(1.0)`;
          circle.style.transform = `scale(1.0)`;
          // circle.style.border = `1vh solid white`;
          resolve();
          // circle.style.transform = `scale(1)`;
        }
      }, 1000);
    }).then(() => {
      // console.log('then...')

      // let limits = [80, 90, 70, 80, 60, 50];

      for (let i = 0; i < circles.length; i++) {
        // circles[i].style.backgroundImage = `url("/images/waveDef.svg");`
        // circles[i].style.backgroundSize = "400% ";

        circles[0].style.backgroundPositionY = "55%";
        circles[1].style.backgroundPositionY = "65%";
        circles[2].style.backgroundPositionY = "45%";
        circles[3].style.backgroundPositionY = "55%";
        circles[4].style.backgroundPositionY = "35%";
        circles[5].style.backgroundPositionY = "25%";



        circles[i].style.animation = `moveliquid 4s ease-in-out 1`;
      }

    });


  }
});