let x,y;
let s;
let img;
//let count = 0;
//let fr = 30; //fps

function preload() {
  img = loadImage('images/cat02.png');
}

function setup() {
//   createCanvas(400,400);
  createCanvas(windowWidth, windowHeight);

  background(0,4,51);

  //framerate(fr);
  stroke(250);
  for (i=0; i<50; i++){
    x = random(0,windowWidth);
    y = random(0,windowHeight);
    s = random(5,10);
    drawingContext.shadowBlur = 25;
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowColor = color(240,240,255);
    //point(x, y);
    ellipse(x, y, s);
  }
  image(img,windowWidth/2,windowHeight - 406);
//   filter(BLUR, 0);
}

function draw() {
  //background(0,4,51);
  //stroke(255);
  //x = random(0,400);
  //y = random(0,400);
  //if (count % 2 == 0) {
  //  point(x, y);
  //}
  //count++;
}