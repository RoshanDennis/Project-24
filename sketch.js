
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

	


function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,height,1200,20)
	
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



