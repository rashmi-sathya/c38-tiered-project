var cat, happycat, database;
var gameState;
var bedroom,garden,livingroom,washroom;

function preload(){
  sadcat = loadImage("cat.png");
  happycat = loadImage("catwalk.png");
 
  bedroom = loadImage("catsleep.jpg");
  garden = loadImage("catgarden.jpg");
  livingroom = loadImage("catsofa.jpg");
  washroom = loadImage("catbathroom.jpg")
}

function setup() {
  database = firebase.database();
  createCanvas(550, 600);
  cat= createSprite(250,250,10,10);
  cat.addImage(sadcat);
  cat.scale = 0.15;

}


function draw() {  
  background("yellow")

  var gameStateRef=database.ref('gameState');
  gameStateRef.on('value',function(data){
    gameState = data.val();
  });
 
  var Bath=createButton("I want to take bath");
  Bath.position(580,125);
  if(Bath.mousePressed(function(){
    gameState=1;
    database.ref('/').update({'gameState':gameState});
  }));
  if(gameState===1){
    cat.addImage(washroom);
    cat.scale=0.3;
  }

  var Sleep=createButton("I am very sleepy");
  Sleep.position(710,125);
  if(Sleep.mousePressed(function(){
    gameState=2;
    database.ref('/').update({'gameState':gameState});
  }));
  if(gameState===2){
    cat.addImage(bedroom);
    cat.scale=0.3;
  }

  var Play=createButton("Lets play !");
  Play.position(500,160);
  if(Play.mousePressed(function(){
    gameState=3;
    database.ref('/').update({'gameState':gameState});
  }));
  if(gameState===3){
    cat.addImage(livingroom);
    cat.scale=0.3;
   
  }

  var PlayInGarden=createButton("Lets play in park");
  PlayInGarden.position(585,160);
  if(PlayInGarden.mousePressed(function(){
    gameState=4;
    database.ref('/').update({'gameState':gameState});
  }));
  if(gameState===4){
    cat.y=175;
  cat.addImage(garden);
    cat.scale=0.3;
 
  }

  drawSprites();
  textSize(17);
  fill("black");
}
