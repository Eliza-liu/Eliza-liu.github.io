var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState= "L1";
var img;
 var imgSize = 170;
function preload(){
  img = loadImage('https://eliza-liu.github.io/diyps/game/head.png');
  img1 = loadImage('https://eliza-liu.github.io/diyps/game/mouse.png');
  img2 = loadImage('https://eliza-liu.github.io/diyps/ban.png');
  img3 = loadImage('https://eliza-liu.github.io/diyps/star.png');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(220);
  
  levelOne();
  
  text(("Score: " + score), width/2, 40);
  

} // end draw

function sight(){
  //mouse image in snake head
 image(img, mouseX-10, mouseY-10);
}
function levelOne(){
  text("Level 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>5){
// level 2
  fill(random(255));
  }
  
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} // end level one
