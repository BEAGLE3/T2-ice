
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var form,player,game;
var database;
var playerCount=0;
var gameState=0
var penguinImg,penguin,peng;
var bg,back_Img;
var b1,b2,b3,flag,stick,tree;
var obGroup;
var c1,c2,c3,c4;
var player1;

function preload()
{
	penguinImg=loadImage("2.png");
	peng=loadImage("4.png");
	bg=loadImage("snow.png")
	back_Img=loadImage("bg1.png")
	b1=loadImage("b1.png")
	b2=loadImage("b2.png")
	b3=loadImage("b3.png")
	flag=loadImage("flag.png")
	stick=loadImage("stick.png")
	tree=loadImage("tree.png")
	c1=loadImage("candy1.png");
	c2=loadImage("candy2.png");
	c3=loadImage("candy3.png");
	c4=loadImage("candy4.png");
	obGroup = new Group();
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database()

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  game=new Game()
  game.getState()
  game.start()
   
	Engine.run(engine);
  
}


function draw() {
	if(playerCount === 1){
		game.update(1);
	  }
	  if(gameState === 1){
		clear();
		game.play();
	  }
	  if(gameState === 2){
		game.end();
	  }
}



