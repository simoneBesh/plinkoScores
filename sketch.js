const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground1;
var plinko1;

var particlesArr = [];
var plinkoArr = [];
var divisionArr = [];
var divisionHeight = 300; 

var score = 0; 
var particleSingle; 
var turn = 0;
var gamestate="PLAY"; 
var turn2=5;

function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
	world = engine.world;

ground1=new ground (240, 800, 480, 30);
division1=new division ();
plinko1=new plinko(200, 200, 10);

for (var i = 0; i<=width; i=i+80){
  divisionArr.push(new division (i, height-divisionHeight/2, 10, divisionHeight));
}
//adding rows of plinkos
for (var j = 40; j<= width; j=j+50) {
  plinkoArr.push(new plinko(j, 75, 10));
}
for (var j = 15; j<= width; j=j+50) {
  plinkoArr.push(new plinko(j, 175, 10));
}
for (var j = 40; j<= width; j=j+50) {
  plinkoArr.push(new plinko(j, 275, 10));
}
for (var j = 15; j<= width; j=j+50) {
  plinkoArr.push(new plinko(j, 375, 10));
}

Engine.run(engine);

}

function draw() {
  background(0, 0, 0);  

//if (frameCount%20===0){
//  particlesArr.push(new particle(random(width/2-100, width/2+100), 10, 10));
//}

ground1.display();
//console.log(ground1.body.position.x + "," + ground1.body.position.y);
for (var g=0; g<particlesArr.length; g++){
  //console.log(particlesArr[g]);
  particlesArr[g].display();
}
for (var o=0; o<plinkoArr.length; o++){
  plinkoArr[o].display();
}
for (var b=0; b<divisionArr.length; b++){
  divisionArr[b].display();
}

fill ("white");
textSize(20);
text ("score: " + score, 400, 50);

text (500, 30, 500);
text (300, 110, 500);
text (200, 190, 500);
text (200, 270, 500);
text (300, 350, 500);
text (500, 430, 500);
//line = createSprite (240, 480, 480, 10);

//errors here
if (particleSingle!=null){
  particleSingle.display();
  if (particleSingle.body.position.y>760){
    if(particleSingle.body.position.x<100){
      score=score+500;
      console.log(score);
      particleSingle=null;
      if (turn>=5){
        gamestate="end";
      }
    } 
  }
}

if (particleSingle!=null){
  particleSingle.display();
  if (particleSingle.body.position.y>760){
    if (particleSingle.body.position.x>101 && particleSingle.body.position.x<300){
      score=score+300;
      console.log(score);
    }
      particleSingle=null;
      if (turn>=5){
        gamestate="end";
      }
    } 
  }


if (particleSingle!=null){
  particleSingle.display();
  if (particleSingle.body.position.y>760){
    if (particleSingle.body.position.x>301 && particleSingle.body.position.x<480){
      score=score+100;
      console.log(score);
    }
      particleSingle=null;
      if (turn>=5&&turn2<=0){
        gamestate="end";
      }
    } 
  }



drawSprites();
}

function mousePressed(){
  if (gamestate!=="end"){
    turn++;
    turn2--;
    particleSingle=new particle (mouseX, 10, 10, 10); 
  }

}

