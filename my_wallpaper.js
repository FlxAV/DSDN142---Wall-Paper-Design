//your parameter variables go here!
//grid setup
let rect_width  = 20;
let rect_height = 20;
let cellWidth = 100;
let cellHeight = 100;
let rowOffset = 0;


//Flower of Life variables
let circleXpos = 0; // main ellipse Xcord
let circleXposTemp = 0; //version2
let circleXposOnY = 0; //version1
let circleYpos = 0; // main ellipse Ycord
let circleYposTemp = 0; //version2
let circleOffset = 0;
let circleDIAM = 40;
let circleRADIUS = circleDIAM/2;
let circleXamountV1 = (100/circleRADIUS)+2; // version1
let circleXamount = 6;
let circleYamount = 4;


//**************MAKE SURE ONLY ONE OF THE 'CHECK' VARIABLES IS SET TO TRUE*************************

let flowerCheck = false; // set to true for a flower of life variable that unfortunately not work with the grid wallpaper

let mamsPatternCheck = false;// true for a funky pattern.

// Variables for when devellopping, set true for no randomness and select which tile you want
let phareCheck = false; // lighthouse (Phare = lighthouse)
let merCheck = false; // ocean (Mer = ocean)
let ileCheck = false; // island (ile = island)
let birdsCheck = false;// birds

//Used for creating the border.
let patternBoatCheck = false; //also creates a pattern if set to true
let patternWheelCheck = false;//also creates a pattern if set to true
let patternMarinCheck = false;//used on pattern
let patternMarinBIGCheck = false;//A pattern with the border but massive.

let pharePatternCheck = true;// makes the pattern randomized

let counter =0;

//*********VARIABLES YOU CAN CHANGE AROUND EASILY **********************

let bigAndSmallCheck = true; //have both small and big island (true) or just big islands(false);
let pharePatternWheelOrBoat = "W";//Choose if the pattern is boats "B" or boatWheels "W"

//janky percentages... (try and make the first three variable < 100)
let percentageOfPhare =5;
let percentageOfIslands = 20;
let percentageOfBirds = 40;
let percentageOfWater = 100-(percentageOfPhare+percentageOfIslands+percentageOfBirds);




//******************COPY AND PASTE EVERYTHING ABOVE THIS LINE*******************************


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);  //DEVELOP_GLYPH  ||  GRID_WALLPAPER
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

//grid setting
if(flowerCheck){
   cellHeight = 3*(2* 20*cos(30));
   cellWidth = 100;
}

if(phareCheck|| merCheck|| ileCheck || birdsCheck ||pharePatternCheck||patternMarinCheck){
  cellHeight=150;
  cellWidth=156;
  rowOffset=75;
}
if(patternMarinBIGCheck){
  cellHeight=200;
  cellWidth=1248;
}

if(patternBoatCheck||patternWheelCheck){
  cellHeight =300;
  cellWidth=300;
  rowOffset = 150;
}
if(mamsPatternCheck){
  cellHeight = 150;
  cellWidth = cellHeight;
}


  //Grid settings
  pWallpaper.grid_settings.cell_width  = cellWidth;
  pWallpaper.grid_settings.cell_height = cellHeight;
  pWallpaper.grid_settings.row_offset  = rowOffset;
}

function wallpaper_background() {

//set wallpaper background to correct colour
if(phareCheck|| merCheck || ileCheck || birdsCheck || pharePatternCheck){
background(143,184,212);
}else if(patternBoatCheck||patternWheelCheck){background("#88d2d5");}
else{background(255, 255, 240);}

}

function my_symbol() {




if(patternWheelCheck){drawWheel(0,0,1);}//does the wheel for the border pattern
if(patternBoatCheck){drawPatternBoat(0,0,1);}//does the boat in the border pattern
if(patternMarinCheck){drawPatternMarin();}//does just the completed border.
if(patternMarinBIGCheck){drawPatternMarinBIG();}//does just the completed border.


if(phareCheck){drawPhare(15);}//phare only
if(merCheck){drawMer(15);}//water only
if(ileCheck){drawIles(15);}//isalnd only
if(birdsCheck){drawBirds(15);}//birds only

//this makes the random pattern for the final pattern
if(pharePatternCheck){

counter = int(random(0,100));
push();
if(counter>0 && counter<= (100-(percentageOfBirds+percentageOfPhare+percentageOfWater))){
  drawIles(15);

}else if(counter>percentageOfIslands && counter<=(100-(percentageOfBirds+percentageOfWater))){
  drawPhare(15);

}else if(counter>percentageOfIslands+percentageOfPhare && counter<=(100-(percentageOfWater))){
  drawBirds(15);

}else if(counter>percentageOfIslands+percentageOfPhare+percentageOfBirds||counter==0){
drawMer(15);

}
pop();
}





//************TESTS************
if(mamsPatternCheck){drawPattern3();}

if(flowerCheck){drawFLowerOfLife();}//the wallpaper code no work with this
//drawFlower(cellWidth/2,cellHeight/2);

}//my symbol end



//phare
function drawPhare(yMove){


stroke(0);
strokeWeight(1);
fill("#FADD5C");
rect(104,61-yMove,10,6);
//greyBase
fill(200);
rect(103,67-yMove,12,4);
//redCap
fill(255,0,0);
beginShape();
vertex(104,59-yMove);
vertex(109,55-yMove);
vertex(114,59-yMove);
endShape(CLOSE);
//redCap ball
ellipse(109,55-yMove,3,3);
//redCap base
rect(102,59-yMove,14,2);

//phare base
fill(255);
beginShape();
vertex(105,71-yMove);
vertex(113,71-yMove);
vertex(118,104-yMove);
vertex(102,104-yMove);
endShape(CLOSE);

fill(255,0,0);
beginShape();
vertex(105,71-yMove);
vertex(113,71-yMove);
vertex(114,76-yMove);
vertex(104.5,76-yMove);
endShape(CLOSE);
beginShape();
vertex(104,83-yMove);
vertex(115,83-yMove);
vertex(116,91-yMove);
vertex(103,91-yMove);
endShape(CLOSE);
beginShape();
vertex(102.5,98-yMove);
vertex(117,98-yMove);
vertex(119,110-yMove);
vertex(102,110-yMove);
endShape(CLOSE);


fill("#868C8C");
//caillou1
beginShape();
vertex(118,103-yMove);
vertex(124,105-yMove);
vertex(129,110-yMove);
vertex(113,110-yMove);
vertex(113,105-yMove);
endShape(CLOSE);
//caillou2
beginShape();
vertex(99,103-yMove);
vertex(101,100-yMove);
vertex(114,100-yMove);
vertex(121,110-yMove);
vertex(101,110-yMove);
endShape(CLOSE);
//caillou3
beginShape();
vertex(87,110-yMove);
vertex(88,105-yMove);
vertex(102,103-yMove);
vertex(106,110-yMove);
endShape(CLOSE);

//mer
fill("#6CA09F");
noStroke();
rect(0,cellHeight-(40+yMove), cellWidth, 40);
//waves
noFill();
for(i=0;i<6;i++){
  drawWave(0+i*26,110-yMove);
}


drawPatternMarin();


}
//water
function drawMer(yMove){

  //mer
  fill("#6CA09F");
  noStroke();
  rect(0,cellHeight-(40+yMove), cellWidth, 40);
  //waves
  noFill();
  for(i=0;i<6;i++){
    drawWave(0+i*26,110-yMove);
  }


  drawPatternMarin();

}
//isalnd
function drawIles(yMove){
  let bigOrSmall = 1;
 if(bigAndSmallCheck){
   bigOrSmall = int(random(1,3));
  if(bigOrSmall==2){bigOrSmall=0.6;}
}
  drawIsland(random(10,80),bigOrSmall);

  //mer
  fill("#6CA09F");
  noStroke();
  rect(0,cellHeight-(40+yMove), cellWidth, 40);
  //waves
  noFill();
  for(i=0;i<6;i++){
    drawWave(0+i*26,110-yMove);
  }
  drawPatternMarin();
}
//water with birds
function drawBirds(yMove){
let birdCount = int(random(0,3));
  for(let i = 0; i<=birdCount;i++){
      if(i==0){
        drawBird(random(10,140),random(10,30),1);
      }else if(i==1){
        drawBird(random(10,140),random(35,40),1);
      }else if(i==2){
        drawBird(random(10,140),random(90,100),0.5);
      }
  }

  //mer
  fill("#6CA09F");
  noStroke();
  rect(0,cellHeight-(40+yMove), cellWidth, 40);
  //waves
  noFill();
  for(i=0;i<6;i++){
    drawWave(0+i*26,110-yMove);
  }
  drawPatternMarin();
}
//bird
function drawBird(X,Y, scaleBird){
  push();
  scale(scaleBird);
  noFill();
  bezier(X-7,Y-5,X-3,Y-4,X-2,Y-4,X,Y);
  bezier(X+7,Y-5,X+3,Y-4,X+2,Y-4,X,Y);
  pop();
}
//for the island
function drawFeuille(X, Y,rotationLeaf,LR){
  push();

  if(LR == 1){
    //feuille1
    rotate(rotationLeaf);
    fill("#4AAD1B");
    beginShape();
    vertex(X+0,Y+0);
    vertex(X+10,Y+0);
    vertex(X+11,Y-2);
    vertex(X+13,Y+0);
    vertex(X+25,Y+0);
    bezierVertex(X+25,Y+0,X+10, Y-20,X+0,Y+0);
    endShape();
  }
  if(LR == 0){
    Y*=(-1);
    rotate(rotationLeaf);
    fill("#4AAD1B");
    beginShape();
    vertex(X+0,Y+0);
    vertex(X+10,Y+0);
    vertex(X+11,Y-2);
    vertex(X+13,Y+0);
    vertex(X+25,Y+0);
    bezierVertex(X+25,Y+0,X+10, Y-20,X+0,Y+0);
    endShape();

  }

pop();
}
//one island
function drawIsland(X,scaleIsland){
push();
let Y = 0;
if(scaleIsland == 0.6){
  Y=37;
}


translate(X,Y);
scale(scaleIsland);
  fill("#916335");
  beginShape();
  vertex(30,50);
  bezierVertex(30,50,40,60,40,85);
  vertex(30,85);
  bezierVertex(30,85,40,65,27,50);
  endShape();
//coco
fill("#78411F");
  ellipse(27,53,6,6);
  ellipse(31,52,6,6);
//leafes
drawFeuille(50,28,30,1);
drawFeuille(10,57,-20,1);
drawFeuille(25,-28,30,0);
drawFeuille(-14,-57,-20,0);
//sable
fill("#F3D135");
arc(40,97,70,25,180,0);
pop();
}
//for all (the water)
function drawWave(X,Y){
  fill("#6CA09F");
  //fill(0);
  noStroke();
  beginShape();
  vertex(X-1,Y+1);
  vertex(X+12,Y-3);
  vertex(X+14,Y+0);
    vertex(X+26,Y+0);
  vertex(X+26,Y+3);
  vertex(X-1,Y+3);

  endShape(CLOSE);

 stroke(0);
 noFill();
   bezier(X+26,Y,X+16,Y,X+11,Y,X+13,Y-3);
   bezier(X+13,Y-3,X+10,Y-3,X+5,Y,X,Y);
}
//for the border pattern
function drawPatternBoat(Xpos,Ypos, scaleMarin1){
  push();
  scale(scaleMarin1);
  noStroke();
fill("#334760");
//coque
beginShape();
  vertex(Xpos+50, Ypos+210);
  quadraticVertex(Xpos+70, Ypos+310, Xpos+50, Ypos+510);
  bezierVertex(Xpos+100, Ypos+260, Xpos+100, Ypos+265, Xpos+250, Ypos+260);
  bezierVertex(Xpos+280, Ypos+235, Xpos+250, Ypos+210, Xpos+250, Ypos+210);
endShape(CLOSE)
//mat
rect(Xpos+160,Ypos+40,3,170);
//voile1
beginShape();
vertex(Xpos+155, Ypos+50);
vertex(Xpos+155,Ypos+205);
bezierVertex(Xpos+140, Ypos+185, Xpos+110, Ypos+175, Xpos+60, Ypos+205);
bezierVertex(Xpos+50, Ypos+150, Xpos+60, Ypos+105, Xpos+155, Ypos+55);
endShape();
//voile2
beginShape();
vertex(Xpos+167, Ypos+60);
vertex(Xpos+167,Ypos+205);
bezierVertex(Xpos+167, Ypos+200, Xpos+190, Ypos+185, Xpos+245, Ypos+205);
vertex( Xpos+245, Ypos+205);
endShape();
//drapeau
beginShape();
vertex(Xpos+167, Ypos+41);
vertex(Xpos+167,Ypos+55);
vertex( Xpos+200,Ypos+48 );
endShape();

pop();
}
//for the border pattern
function drawWheel(Xpos,Ypos,scaleWheel){

  push();
  scale(scaleWheel);
  noStroke();

  push();
  translate(Xpos+150,Ypos+150);
    let circles = 8;
      for(let i=0; i<circles;i++){
        fill("#334760");
      ellipse(0,-80,15,25);
      rectMode(CENTER);
      rect(0,-60,10,30);
      rotate(360/circles);
    }
    pop();

  fill("#334760");
  ellipse(Xpos+150,Ypos+150,115,115);
  fill(255);
  ellipse(Xpos+150,Ypos+150,109,109);
  fill("#334760");
  ellipse(Xpos+150,Ypos+150,105,105);
  fill(255);
  ellipse(Xpos+150,Ypos+150,75,75);
  fill("#334760");
  ellipse(Xpos+150,Ypos+150,70,70);

if(patternWheelCheck){
  fill("#88d2d5");
}else{  fill("#FFEFA6");}
  ellipse(Xpos+150,Ypos+150,63,63);


  push();
  translate(Xpos+150,Ypos+150);
      for(let i=0; i<circles;i++){
        fill("#334760");
      rectMode(CENTER);
      rect(0,-20,5,30);
      rotate(360/circles);
    }
    pop();

    fill("#334760");
    ellipse(Xpos+150,Ypos+150,25,25);
    fill(255);
    ellipse(Xpos+150,Ypos+150,17,17);
    fill("#334760");
    ellipse(Xpos+150,Ypos+150,15,15);
    fill(255);
    ellipse(Xpos+150,Ypos+150,10,10);

pop();

}
//for all (the border pattern)
function drawPatternMarin(){
fill("#334760");
noStroke();
rect(0,125,156,25);
fill("#FFEFA6");
rect(0,130,156,15);

stroke(0);
line(0,125,156,125);
line(0,130,156,130);
line(0,145,156,145);
line(0,150,156,150);

if(pharePatternWheelOrBoat=="W"){
  for(let i = 0; i<5;i++){
    drawWheel(0+i*450,1815,0.07);
  }
}
if(pharePatternWheelOrBoat=="B"){
for(let i = 0; i<5;i++){
  drawPatternBoat(0+i*630,2600,0.05);
}
}
}
//border but big
function drawPatternMarinBIG(){
fill("#334760");
noStroke();
rect(0,0,1248,200);
fill("#FFEFA6");
rect(0,40,1248,120);
strokeWeight(6);
stroke(0);
line(0,40,1248,40);
line(0,160,1248,160);

if(pharePatternWheelOrBoat=="W"){
  for(let i = 0; i<5;i++){
    drawWheel(0+i*460,35,0.55);
  }
}
if(pharePatternWheelOrBoat=="B"){
for(let i = 0; i<5;i++){
  drawPatternBoat(0+i*550,70,0.45);
}
}


}



//funky pattern
function drawPattern3(){
fill(255);
//rect(0,0,156,150);
strokeWeight(10);
noFill();
  bezier(0,cellWidth/3, random(20,cellWidth-20),random(20,cellWidth-20),random(20,cellWidth-20), random(20,280),cellWidth,cellWidth/3);
  bezier(0,cellWidth*2/3, random(20,cellWidth-20),random(20,cellWidth-20),random(20,cellWidth-20), random(20,cellWidth-20),cellWidth,cellWidth*2/3);
  bezier(cellWidth/3,0, random(20,cellWidth-20),random(20,cellWidth-20),random(20,cellWidth-20), random(20,cellWidth-20),cellWidth/3,cellWidth);
bezier(cellWidth*2/3,0, random(20,cellWidth-20),random(20,cellWidth-20),random(20,cellWidth-20), random(20,cellWidth-20),cellWidth*2/3,cellWidth);
}

//draws the Flower of Life pattern
function drawFLowerOfLife(){
  for(let i = 0; i<circleXamount; i++){
    for (let j = 0; j<circleYamount; j++){
      drawFlower(circleXpos, circleYpos);
      circleYpos += 2* 20*cos(30);
    }
    circleYpos = 0;
    circleXpos += circleRADIUS;
  }
}
//draws a single Flower
function drawFlower(centerX , centerY){
  noFill();
    ellipse(centerX, centerY, circleDIAM, circleDIAM);
    for (let j = 0; j<6; j++){
      let newangle =60;
      circleXposTemp = centerX + circleRADIUS * cos(j*newangle);
      circleYposTemp = centerY + circleRADIUS * sin(j*newangle);
      ellipse(circleXposTemp, circleYposTemp, circleDIAM,circleDIAM);
    }
}
