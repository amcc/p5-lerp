let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  x = lerp(x, mouseX, 0.05);
  y = lerp(y, mouseY, 0.05);
  circle(x, y, 100);
}
