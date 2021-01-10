let x,y;
let s;
let img;
//let count = 0;
//let fr = 30; //fps

function preload() {
  img = loadImage('images/PB256850o_TP_V.jpg');
}

function setup() {
  createCanvas(400,400);
  image(img,200,200);
  background(0,4,51);
  //framerate(fr);
  stroke(255);
  for (i=0; i<50; i++){
    x = random(0,400);
    y = random(0,400);
    s = random(5,10);
    //point(x, y);
    ellipse(x, y, s);
  }
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