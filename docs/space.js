let x,y;
let w;
let img;
let h,s,b;
let button,button2,button3;


function setup() {
  // window.addEventListener("touchstart", function (event) { event.preventDefault(); }, { passive: false });
  // window.addEventListener("touchmove", function (event) { event.preventDefault(); }, { passive: false });

  createCanvas(windowWidth, windowHeight - 50);

  background(0);

  for (i=1; i<300; i++){
    blendMode(SCREEN);
    colorMode(HSB);
    h = random(100,360);
    fill(h, 100, 100, 100);

    x = random(0,windowWidth);
    y = random(0,windowHeight);
    w = random(0,5);

    for (j = 1; j < 5; ++j) {
        strokeWeight(j);
        stroke(
          map(j, 1, 50, 180, 360),
          80,
          map(j, 1, 50, 15, 1),
          100
          );
        ellipse(x, y, w);
      }

    }
  blendMode(BLEND);
  colorMode(RGB);

  loadImage('images/cat.png', img => {
    image(img, 0,windowHeight - 406);
  });

  button = createButton("Save");
  button.style("width", "50px");
  button.style("height", "50px");
  button.style("border-radius", "25px");
  button.style("color", "#ffffff");
  button.style("background", "#00ce14");
  button.mousePressed(saveme);

  button2 = createButton("Tweet");
  button2.style("width", "50px");
  button2.style("height", "50px");
  button2.style("border-radius", "25px");
  button2.style("color", "#ffffff");
  button2.style("background", "#00acee");
  button2.mousePressed(tweetme);

  button3 = createButton("Clear");
  button3.style("width", "50px");
  button3.style("height", "50px");
  button3.style("border-radius", "25px");
  button3.style("color", "#ffffff");
  button3.style("background", "#cc0000");
  button3.mousePressed(clearme);
}

function draw() {
  noStroke();
  if(mouseIsPressed){
    ellipse(mouseX, mouseY, 10);
  }
}

//スマホを振る
function deviceShaken() {
  // let m = 50;
  // let n = 200;
  // for (k=0; k< windowHeight; k++){
  //   background(225);
  //   fill(255, 255, 255);
  //   ellipse((m++)%width,(n+=6)%width,5,5);
  // }
}

function saveme() {
    saveCanvas('spacecat');
}

function tweetme() {
  link("https://twitter.com/share?ref_src=twsrc%5Etfw");
}

function clearme() {
  link("index.html");
}

function link(url, winName, options) {
  winName && open(url, winName, options) || (location = url);
}
