var score =0;
var gameState= "L1";
var img;
var imgSize = 30;
var imgX = 20;
var imgY = 20;
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
  background(217, 233, 225);
  text("Level 1", width/2, height-20);
  sight();
 var distToimg= dist(imgX, imgY, mouseX, mouseY);
  if (distToimg <imgSize/2){
    
    score= score +1;}
    if (score >5 ){    
//go to level 2
 gameState = "L2";
  } 
image(imh1,imgX,imgY, mouseX, mouseY);
}
//end level 1




function levelTwo(){
  background(231, 233, 217);
  text("Level 2", width/2, height-20);
    sight();
 var distToimg= dist(imgX, imgY, mouseX, mouseY);
  if (distToimg <imgSize/2){
    
    score= score +1;}
    if (score >10 ){    
//go to level 2
 gameState = "L2";
  } 
image(imh2,imgX,imgY, mouseX, mouseY);
}
//end level 2


function levelTwo(){
  background(231, 233, 217);
  text("Level 2", width/2, height-20);
    sight();
 var distToimg= dist(imgX, imgY, mouseX, mouseY);
  if (distToimg <imgSize/2){
    
    score= score +1;}
    if (score >15 ){    
//go to level 2
 gameState = "L3";
  } 
image(img3,imgX,imgY, mouseX, mouseY);
}
//end level 3



function sight(){
 image(img, mouseX-10, mouseY-10);
}
