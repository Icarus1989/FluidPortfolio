let bkgCanvasContainer = document.querySelector('#bkgCanvasContainer');
let mainElt = document.querySelector('#main');

let sections = document.querySelectorAll('section');

// Background Animation

let widthM = document.documentElement.clientWidth;
let heightM = document.documentElement.clientHeight;

let variationX = document.documentElement.clientWidth / 6;
let offset = 0;

let mainCanvas = function (cnv) {



  cnv.setup = function () {
    cnv.createCanvas(widthM, heightM);
  }

  cnv.windowResized = function () { // per ridimensionamento canvas in caso di resize
    widthM = document.documentElement.clientWidth;
    heightM = document.documentElement.clientHeight;
    cnv.resizeCanvas(widthM, heightM);
  }

  cnv.draw = function () {

    cnv.clear();
    cnv.stroke(255);
    cnv.strokeWeight(24);

    cnv.strokeWeight(4);
    cnv.noFill();


    let range = offset + variationX;
    cnv.strokeWeight(3);
    cnv.fill(7, 123, 244);
    range = range * 1.05;
    cnv.stroke(12, 61, 248);

    cnv.beginShape();
    cnv.vertex(0, 0);
    cnv.bezierVertex(widthM / 20, 0, 0, heightM / 9 + range, widthM / 20, heightM / 6.0 + range); // prima valle disc + range
    cnv.bezierVertex(widthM / 12, heightM / 5.1 + range, widthM / 10, heightM / 7 + range, widthM / 10, heightM / 8 + range);
    cnv.bezierVertex(widthM / 8.9, heightM / 6 + range / 2, widthM / 9.2, heightM / 12 + range / 2, widthM / 9.1, heightM / 20 + range / 2);
    cnv.bezierVertex(widthM / 8.9, heightM / 30 + range / 3, widthM / 8.5, heightM / 30 + range / 4, widthM / 6.5, heightM / 34 + range / 4);
    cnv.bezierVertex(widthM / 4, heightM / 50 + range * 0.3, widthM / 4.85, heightM / 13 + range * 1.3, widthM / 4.8, heightM / 12 + range * 1.3); // primo picco disc
    cnv.bezierVertex(widthM / 4.8, heightM / 4 + range * 1.3, widthM / 4, heightM / 4 + range * 1.3, widthM / 3.5, heightM / 4 + range * 1.3); //seconda valle disc
    cnv.bezierVertex(widthM / 2.9, heightM / 4.2 + range * 1.3, widthM / 3.1, heightM / 5.5 + range * 0.5, widthM / 3, heightM / 8 + range * 0.5); //seconda valle sal bass
    cnv.bezierVertex(widthM / 2.9, heightM / 4 + range * 0.8, widthM / 2.4, heightM / 6 + range * 0.8, widthM / 2.4, heightM / 18 + range * 0.8); // seconda valle sal alt
    cnv.bezierVertex(widthM / 2.45, heightM / 20 + range / 3.5, widthM / 2.2, heightM / 24 + range / 3.5, widthM / 2.2, heightM / 22 + range / 3.5); //secondo picco sal
    cnv.bezierVertex(widthM / 2.2, heightM / 24.5 + range / 3.5, widthM / 2.0, heightM / 24 + range / 3.5, widthM / 2.0, heightM / 7 + range / 3.5); //secondo picco disc
    cnv.bezierVertex(widthM / 2, heightM / 10 + range * 1.2, widthM / 2.2, heightM / 3 + range * 1.2, widthM / 1.7, heightM / 3 + range * 1.2); // terza valle disc
    cnv.bezierVertex(widthM / 1.7, heightM / 3 + range * 1.2, widthM / 1.5, heightM / 3 + range * 1.2, widthM / 1.5, heightM / 7 + range * 1.2); //terza valle sal
    cnv.bezierVertex(widthM / 1.5, heightM / 12 + range / 1.2, widthM / 1.4, heightM / 12 + range / 1.2, widthM / 1.4, heightM / 12 + range / 1.2);
    cnv.bezierVertex(widthM / 1.4, heightM / 12 + range / 1.2, widthM / 1.3, heightM / 14 + range / 1.2, widthM / 1.3, heightM / 6 + range / 1.2);
    cnv.bezierVertex(widthM / 1.3, heightM / 6 + range, widthM / 1.3, heightM / 4 + range, widthM / 1.2, heightM / 4 + range);
    cnv.bezierVertex(widthM / 1.1, heightM / 4 + range, widthM / 1.1, heightM / 5 + range, widthM / 1.1, heightM / 6 + range);
    cnv.bezierVertex(widthM / 1.1, heightM / 6 + range / 1.5, widthM / 1.1, heightM / 10 + range / 1.5, widthM / 1.05, heightM / 12 + range / 1.5);
    cnv.bezierVertex(widthM / 1.05, heightM / 12 + range / 1.5, widthM / 1, heightM / 16 + range / 1.5, widthM / 1, heightM / 20 + range / 1.5);
    cnv.vertex(widthM, 0);
    cnv.endShape();

    range = offset + variationX;

    // second glue

    cnv.stroke(7, 123, 244);
    cnv.fill(12, 61, 248);
    cnv.beginShape();
    cnv.vertex(0, 0);
    cnv.bezierVertex(widthM / 20, 0, 0, heightM / 9 + range, widthM / 20, heightM / 6.0 + range); // prima valle disc + range
    cnv.bezierVertex(widthM / 12, heightM / 5.1 + range, widthM / 10, heightM / 7 + range, widthM / 10, heightM / 8 + range);
    cnv.bezierVertex(widthM / 8.9, heightM / 6 + range / 2, widthM / 9.2, heightM / 12 + range / 2, widthM / 9.1, heightM / 20 + range / 2);
    cnv.bezierVertex(widthM / 8.9, heightM / 30 + range / 3, widthM / 8.5, heightM / 30 + range / 4, widthM / 6.5, heightM / 34 + range / 4);
    cnv.bezierVertex(widthM / 4, heightM / 50 + range * 0.3, widthM / 4.85, heightM / 13 + range * 1.3, widthM / 4.8, heightM / 12 + range * 1.3); // primo picco disc
    cnv.bezierVertex(widthM / 4.8, heightM / 4 + range * 1.3, widthM / 4, heightM / 4 + range * 1.3, widthM / 3.5, heightM / 4 + range * 1.3); //seconda valle disc
    cnv.bezierVertex(widthM / 2.9, heightM / 4.2 + range * 1.3, widthM / 3.1, heightM / 5.5 + range * 0.5, widthM / 3, heightM / 8 + range * 0.5); //seconda valle sal bass
    cnv.bezierVertex(widthM / 2.9, heightM / 4 + range * 0.8, widthM / 2.4, heightM / 6 + range * 0.8, widthM / 2.4, heightM / 18 + range * 0.8); // seconda valle sal alt
    cnv.bezierVertex(widthM / 2.45, heightM / 20 + range / 3.5, widthM / 2.2, heightM / 24 + range / 3.5, widthM / 2.2, heightM / 22 + range / 3.5); //secondo picco sal
    cnv.bezierVertex(widthM / 2.2, heightM / 24.5 + range / 3.5, widthM / 2.0, heightM / 24 + range / 3.5, widthM / 2.0, heightM / 7 + range / 3.5); //secondo picco disc
    cnv.bezierVertex(widthM / 2, heightM / 10 + range * 1.2, widthM / 2.2, heightM / 3 + range * 1.2, widthM / 1.7, heightM / 3 + range * 1.2); // terza valle disc
    cnv.bezierVertex(widthM / 1.7, heightM / 3 + range * 1.2, widthM / 1.5, heightM / 3 + range * 1.2, widthM / 1.5, heightM / 7 + range * 1.2); //terza valle sal
    cnv.bezierVertex(widthM / 1.5, heightM / 12 + range / 1.2, widthM / 1.4, heightM / 12 + range / 1.2, widthM / 1.4, heightM / 12 + range / 1.2);
    cnv.bezierVertex(widthM / 1.4, heightM / 12 + range / 1.2, widthM / 1.3, heightM / 14 + range / 1.2, widthM / 1.3, heightM / 6 + range / 1.2);
    cnv.bezierVertex(widthM / 1.3, heightM / 6 + range, widthM / 1.3, heightM / 4 + range, widthM / 1.2, heightM / 4 + range);
    cnv.bezierVertex(widthM / 1.1, heightM / 4 + range, widthM / 1.1, heightM / 5 + range, widthM / 1.1, heightM / 6 + range);
    cnv.bezierVertex(widthM / 1.1, heightM / 6 + range / 1.5, widthM / 1.1, heightM / 10 + range / 1.5, widthM / 1.05, heightM / 12 + range / 1.5);
    cnv.bezierVertex(widthM / 1.05, heightM / 12 + range / 1.5, widthM / 1, heightM / 16 + range / 1.5, widthM / 1, heightM / 20 + range / 1.5);
    cnv.vertex(widthM, 0);
    cnv.endShape();
  }
}

new p5(mainCanvas, bkgCanvasContainer);

// console.log('VariationX: ' + variationX);

mainElt.addEventListener('scroll', () => {
  offset = -(sections[0].getBoundingClientRect().y) / 10;
});


// Background Animation

// Class

class Particle {
  constructor(p = p5.instance, w, h, xLoc, pxPerFrame, limit) {
    this.p = p;
    this.w = w;
    this.h = h;
    this.xLoc = xLoc;
    this.pxPerFrame = pxPerFrame;
    this.pos = p.createVector(this.xLoc, 0);
    this.vel = p.createVector(0, pxPerFrame);
    this.r = w / 3.3;
    this.limit = this.r / limit;
  }
  show() {

    this.p.fill(4, 52, 222);
    // this.p.noStroke();
    // this.p.stroke(50, 50, 50);
    // this.p.strokeWeight(2);
    // this.p.point(this.pos.x - this.r / 2, this.pos.y);
    this.p.noStroke();

    this.p.arc(this.pos.x, this.pos.y, this.r, this.r, 0, this.p.PI);
    // this.p.fill(50);
    // this.p.arc(this.pos.x, this.pos.y, this.r / 1.5, this.r / 1.5, 0, this.p.PI);



    return this;
  }
  update() {
    this.pos.add(this.vel);
  }
  edges() {
    if (this.pos.y > this.h - (this.limit)) {
      this.vel.y = 0;
    }
  }
}

// Class


let textFields = document.querySelectorAll('.textField');

// canvas zone creation

let canvasContainer = document.createElement('div');
textFields[0].append(canvasContainer);
canvasContainer.classList.add('textCanvas');

let canvasContainerTwo = document.createElement('div');
textFields[1].append(canvasContainerTwo);
canvasContainerTwo.classList.add('textCanvas');

let canvasContainerThree = document.createElement('div');
textFields[2].append(canvasContainerThree);
canvasContainerThree.classList.add('textCanvas');

// canvas zone creation

let wOne = textFields[0].clientWidth;
let hOne = textFields[0].clientHeight;

let wTwo = textFields[1].clientWidth;
let hTwo = textFields[1].clientHeight;

let wThree = textFields[2].clientWidth;
let hThree = textFields[2].clientHeight;

let canvasTextFieldOne = function (cnv) {

  let particleOne;
  let particleTwo;
  let particleThree;

  cnv.setup = function () {
    cnv.createCanvas(wOne, hOne);
    cnv.background(220, 0);
    particleOne = new Particle(cnv, wOne, hOne, wOne / 2, 0.8, 1.8);
    particleTwo = new Particle(cnv, wOne, hOne, wOne / 4, 1.2, 1.4);
    particleThree = new Particle(cnv, wOne, hOne, wOne * (3 / 4), 0.8, 1.0);
    cnv.fill(255);
    cnv.noStroke();
    // cnv.strokeCap(cnv.ROUND);
    // cnv.strokeJoin(cnv.ROUND);
    // cnv.stroke(50, 50, 50);
    // cnv.strokeWeight(2);
    cnv.rect(wOne / 24, 0, wOne - (2 * wOne / 24), hOne - (particleOne.limit / 0.8), particleOne.r / 4);
  }

  cnv.windowResized = function () {
    let w = textFields[0].clientWidth;
    let h = textFields[0].clientHeight;
    cnv.resizeCanvas(w, h);
    cnv.clear();
    particleOne = new Particle(cnv, w, h, w / 2, 0.8, 1.8);
    particleTwo = new Particle(cnv, w, h, w / 4, 1.2, 1.4);
    particleThree = new Particle(cnv, w, h, w * (3 / 4), 0.8, 1.0);

    cnv.fill(255);
    cnv.rect(w / 24, 0, w - (2 * w / 24), h - (particleOne.limit / 0.9), particleOne.r / 4);
  }

  cnv.draw = function () {
    // cnv.stroke(50);
    // cnv.strokeWeight(2);
    particleOne.show();
    particleTwo.show();
    particleThree.show();

    if (window.pageYOffset > sections[1].getBoundingClientRect().y) {
      particleOne.update();
      particleOne.edges();
      particleTwo.update();
      particleTwo.edges();
      particleThree.update();
      particleThree.edges();

    }

  }
}
new p5(canvasTextFieldOne, canvasContainer);


let canvasTextFieldTwo = function (cnv) {

  let particleOne;
  let particleTwo;
  let particleThree;

  cnv.setup = function () {
    cnv.createCanvas(wTwo, hTwo);
    cnv.background(220, 0);
    particleOne = new Particle(cnv, wTwo, hTwo, wTwo / 2, 0.8, 1.8);
    particleTwo = new Particle(cnv, wTwo, hTwo, wTwo / 4, 1.2, 1.4);
    particleThree = new Particle(cnv, wTwo, hTwo, wTwo * (3 / 4), 1.4, 1.6);
    cnv.rect(wTwo / 24, 0, wTwo - (2 * wTwo / 24), hTwo - (particleOne.limit / 0.8), particleOne.r / 4);
  }

  cnv.windowResized = function () {
    let w = textFields[1].clientWidth;
    let h = textFields[1].clientHeight;
    cnv.resizeCanvas(w, h);
    cnv.clear();
    particleOne = new Particle(cnv, w, h, w / 2, 0.8, 1.8);
    particleTwo = new Particle(cnv, w, h, w / 4, 1.2, 1.4);
    particleThree = new Particle(cnv, w, h, w * (3 / 4), 1.4, 1.6);
    cnv.fill(255);
    cnv.rect(w / 24, 0, w - (2 * w / 24), h - (particleOne.limit / 0.9), particleOne.r / 4);
  }

  cnv.draw = function () {

    particleOne.show();
    particleTwo.show();
    particleThree.show();

    if (window.pageYOffset > sections[1].getBoundingClientRect().y) {
      particleOne.update();
      particleOne.edges();
      particleTwo.update();
      particleTwo.edges();
      particleThree.update();
      particleThree.edges();
    }


  }
}
new p5(canvasTextFieldTwo, canvasContainerTwo);


let canvasTextFieldThree = function (cnv) {
  let particleOne;
  let particleTwo;
  let particleThree;

  cnv.setup = function () {
    cnv.createCanvas(wThree, hThree);
    cnv.background(220, 0);
    particleOne = new Particle(cnv, wThree, hThree, wThree / 2, 0.8, 1.8);
    particleTwo = new Particle(cnv, wThree, hThree, wThree / 4, 1.2, 1.4);
    particleThree = new Particle(cnv, wThree, hThree, wThree * (3 / 4), 1.4, 0.7);
    cnv.rect(wThree / 24, 0, wThree - (2 * wThree / 24), hThree - (particleOne.limit / 0.9), particleOne.r / 4);
  }

  cnv.windowResized = function () {
    let w = textFields[2].clientWidth;
    let h = textFields[2].clientHeight;
    cnv.resizeCanvas(w, h);
    cnv.clear();
    particleOne = new Particle(cnv, w, h, w / 2, 0.8, 1.8);
    particleTwo = new Particle(cnv, w, h, w / 4, 1.2, 1.4);
    particleThree = new Particle(cnv, w, h, w * (3 / 4), 1.4, 0.7);
    cnv.fill(255);
    cnv.rect(w / 24, 0, w - (2 * w / 24), h - (particleOne.limit / 0.9), particleOne.r / 4);
  }

  cnv.draw = function () {

    particleOne.show();
    particleTwo.show();
    particleThree.show();

    if (window.pageYOffset > sections[1].getBoundingClientRect().y) {
      particleOne.update();
      particleOne.edges();
      particleTwo.update();
      particleTwo.edges();
      particleThree.update();
      particleThree.edges();
    }

  }

}
new p5(canvasTextFieldThree, canvasContainerThree);