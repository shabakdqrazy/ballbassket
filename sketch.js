const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	ring=loadImage("ring.png")
}

function setup() {
	createCanvas(900, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,900,800,20);
rect1 = new Rectangle (550,820,20,100);
rect2 = new Rectangle (700,820,20,100);
rect3 = new Rectangle (625,860,130,20);
ball = new Basketball (100,640,60);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  rect1.display();
  rect2.display();
  rect3.display();
  
  
  imageMode(CENTER);
  image(ring,630,740,200,300)
  ball.display();
  ground.display();
  
  
  
  drawSprites();
}
function keyPressed(){
  if (keyCode === UP_ARROW){

    Matter.Body.applyForce(ball.body,ball.body.position,{x:700,y:-500})

  }
}



