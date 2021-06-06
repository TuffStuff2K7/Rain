var xCoord1 = 0; yCoord1 = 0; xCoord2 = 0; yCoord2 = 0;

var arr = [];
var pathX = []; pathY = [];

function preload(){

  img = loadImage("Umbrella.png");

}

function setup() {
  
  createCanvas(1821, 1024);

  for(var i = 0; i < 1000; i++){
    arr.push(new Drop());
  }

  console.log(arr);

  man = createSprite(1400, 600);
  man.addImage(img);
  man.scale = 0.5;

}

function draw() {
  
  background("#222831");

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

}

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
    line(px1, py1, px2, py2);

  }

}

function mousePressed() {
  
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
  
    let fs = fullscreen();
    fullscreen(!fs);
  
  }

}
