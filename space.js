let x,y;
let w;
let img;
let h,s,b;
let button;
//let count = 0;
//let fr = 30; //fps


function setup() {
//   createCanvas(400,400);

  let c = createCanvas(windowWidth, windowHeight);

//   background(0,4,51);
  background(0);

  //framerate(fr);
//   stroke(250);
  for (i=1; i<200; i++){
    blendMode(SCREEN);
    colorMode(HSB);
    h = random(100,360);
    fill(h, 100, 100, 100);

    x = random(0,windowWidth);
    y = random(0,windowHeight);
    w = random(2,8);
    // drawingContext.shadowBlur = 25;
    // drawingContext.shadowOffsetX = 0;
    // drawingContext.shadowOffsetY = 0;
    // drawingContext.shadowColor = color(240,240,255);
    strokeWeight(i*0.5);
    stroke(
          map(i, 1, 50, 180, 360),
          80,
          map(i, 1, 50, 15, 1),
          100
          );
    ellipse(x, y, w);
  }
  blendMode(BLEND);
  colorMode(RGB);

  loadImage('images/cat02.png', img => {
    image(img, windowWidth/2,windowHeight - 406);
  });

//   filter(BLUR, 0);
  button = createButton("Save");
  button.mousePressed(saveme);

}

function draw() {
    // if (button.mousePressed()) {
    //     saveCanvas('spacecat');
    //   }
    // button.mousePressed(saveCanvas('spacecat'));
}

function saveme() {
    saveCanvas('spacecat');
}