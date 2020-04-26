var imgX = 40;
var imgY = 40;
var imgSize = 140;
var score = 0;
var gameState = "L1";

function preload(){
  img = loadImage('https://eliza-liu.github.io/diyps/game/head.png');
  img1 = loadImage('https://eliza-liu.github.io/diyps/game/mouse.png');
  img2 = loadImage('https://eliza-liu.github.io/diyps/game/ba.png');
  img3 = loadImage('https://eliza-liu.github.io/diyps/game/tu.png');
}
function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(238, 249, 247);
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
  if (gameState=="L4"){
   levelFour(); 
  }
  
  text(("Score: " + score), width/2, 40);
  

} // end draw


function levelOne(){
  stroke(2);
  text("Level 1 ", width/2, height-20);
  sight();
  var distToImg = dist(imgX, imgY, mouseX, mouseY);
    if (distToImg < imgSize / 2) {
        imgX = random(width);
        imgY = random(height);
        score = score + 1;
    }
    if (score > 12) {
        gameState = "L2";
    }
fill(160, 198, 214 );

    image(img1, imgX, imgY, 50, 50);
} // end level one

function levelTwo(){
   stroke(2);
    background(255, 251, 235  );
  text("Level 2", width/2, height-20);
  sight1();
 var distToImg2 = dist(imgX, imgY, mouseX, mouseY);
    if (distToImg2 < imgSize / 2) {
        imgX = random(width);
        imgY = random(height);
        score = score + 1;
    }
    if (score > 24) {

        gameState = "L3";
    }


    image(img2, imgX, imgY, 100, 100);
} 
// end level two


function levelThree(){
  stroke(2);
  text("Level 3 ", width/2, height-20);
  sight2();
  var distToImg3 = dist(imgX, imgY, mouseX, mouseY);
    if (distToImg3 < imgSize / 2) {
        imgX = random(width);
        imgY = random(height);
        score = score + 1;
 
    }


    image(img3, imgX, imgY, 50, 50);
} // end level one

function sight(){
 image(img, mouseX-10, mouseY-10);
}
function sight1(){
 image(img1, mouseX-10, mouseY-10);
}
function sight2(){
 image(img2, mouseX-10, mouseY-10);
}
