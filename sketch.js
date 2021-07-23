//rain by SomeTuffStuff
  
//This project is heavily inspired by Daniel Shiffman's "Purple Rain in Processing"
//https://thecodingtrain.com/CodingChallenges/004-purplerain.html, https://youtu.be/KkyIDI6rQJI

//uses p5 and p5.play

//declaring variables

var xCoord1 = 0; yCoord1 = 0; xCoord2 = 0; yCoord2 = 0;

var arr = [];
var pathX = []; pathY = [];

function preload(){

  //loading files

  img = loadImage("assets/Umbrella.png");

}

function setup() {
  
  //regular setup stuff, creating an array for the drops, creating all the drops, creating the man sprite

  createCanvas(windowWidth, windowHeight);

  for(var i = 0; i < 1000; i++){
    arr.push(new Drop());
  }

  //console.log(arr);

  man = createSprite(windowWidth * 5 / 6, windowHeight * 4.5 / 6);
  man.addImage(img);
  man.scale = 1 / windowHeight * 240;

  textColor = color("#EEEEEE");
  textColor.setAlpha(255);

}

function draw() {
  
  background("#222831");

  //gen lightning at regular intervals

  if(frameCount % 150 === 0){
    
    lightning();
    lmode = 0;
    
  }

  if((frameCount - 50) % 100 === 0){

    lmode = 1;
    pathX = []; pathY = [];

  }

  if(lmode = 1){

    lightningDraw();
  
  }

  //updating all the drops and drawing them, along with the man

  for(var i = 0; i < arr.length; i++){
    
    if(arr[i].z < 2){
      arr[i].fall();
      arr[i].draw();
    }

  }

  drawSprites();
  
  for(var i = 0; i < arr.length; i++){
    
    if(arr[i].z >= 2){
      arr[i].fall();
      arr[i].draw();
    }

  }

  if(frameCount < 200){
    textAlign(CENTER,CENTER);
    fill(textColor);
    textColor.setAlpha(4 * (56.25 - frameCount));
    noStroke();
    text("Press spacebar for fullscreen",windowWidth/2,30);
  }

}

//lightning generator
//most of the algorithm from "Generative Lightning" by dlatolley: https://editor.p5js.org/dlatolley/sketches/Bu3JRNqgF

function lightning(){
  
  stroke("#dbe6fd");  
  pathX = []; pathY = [];
  for (var i = 0; i < 100; i++) {
  
    xCoord1 = xCoord2;
    yCoord1 = yCoord2;
    xCoord2 = xCoord1 + int(random(-20, 20));
    yCoord2 = yCoord1 + int(random(-10, 20));
    pathX.push(xCoord2);
    pathY.push(yCoord2);
  
  }
  
  xCoord2 = int(random(50, width - 50));
  yCoord2 = 0;

}

//lightning draw
//saves all coordinates from the generator and draws, in the original code lightning lasted only 1 frame 

function lightningDraw(){

  px1 = 0; px2 = 0; py1 = 0; py2 = 0;
  for (var i = 0; i < 100; i++) {

    px1 = pathX[i];
    py1 = pathY[i];
    px2 = pathX[i+1];
    py2 = pathY[i+1];

    strokeWeight(random(1, 5));
    strokeJoin(MITER);
    stroke("#dbe6fd");
    if(px1 && py1 && px2 && py2){
      line(px1, py1, px2, py2);
    }

  }

}

//triggers fullscreen when spacebar pressed

function keyPressed(){
  
  if(keyCode === 32){
    let fs = fullscreen();
    fullscreen(!fs);
  }

}

//allows for dynamic resizing of the window

function windowResized() {
  
  resizeCanvas(windowWidth, windowHeight);
  man.scale = 1 / windowHeight * 240;

  man.x = windowWidth*5/6;
  man.y = windowHeight*4.5/6;

}
