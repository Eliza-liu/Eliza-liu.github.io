var ballx = 200;
var bally = 300;
var ballSize = 40;
var ballSize2 = 20;
var score =0;
var gameState= "L1";

function preload(){
  img = loadImage('https://eliza-liu.github.io/diyps/game/head.png');
  img1 = loadImage('https://eliza-liu.github.io/diyps/game/mouse.png');
  img2 = loadImage('https://eliza-liu.github.io/diyps/game/ba.png');
  img3 = loadImage('https://eliza-liu.github.io/diyps/game/sta.png');
}
function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(217, 227, 233);
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
  
  text(("Score: " + score), width/2, 40);
  

} // end draw


function levelOne(){
  text("Level 1", width/2, height-20);
  sight();
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>10){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  ellipse(ballx, bally, ballSize, ballSize2);
  line(ballx, bally, mouseX, mouseY);
  
} // end level one

function levelTwo(){
    background(217, 233, 225);
  text("Level 2", width/2, height-20);
  sight1();
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>20){
// lvel 3
   gameState = "L3";

  }
  
//  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} // end level two

function levelThree(){
     background(231, 233, 217);
  text("Level 3", width/2, height-20);
  sight2();
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>30){
    //l4
 gameState = "L4";
  } 
//  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} // end level three

function levelFour(){
     background(249, 240, 226  );
  text("Level 4 ", width/2, height-20);
  sight3();
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} // end level four


function sight(){
 image(img, mouseX-10, mouseY-10);
}
function sight1(){
 image(img1, mouseX-10, mouseY-10);
}
function sight2(){
 image(img2, mouseX-10, mouseY-10);
}
function sight3(){
 image(img3, mouseX-10, mouseY-10);
}
