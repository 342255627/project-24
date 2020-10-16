var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2


}
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	ground=createSprite(0,700,10,700);
	bottomDustBody= Bodies.rectangle(width/2, 600, 200, 20);
	World.add(world, bottomDustBody);

	leftDustBody= Bodies.rectangle(300,600,20,100);
	World.add(world, leftDustBody);

	rightDustBody=Bodies.rectangle(500,600,20,100);
    World.add(world, rightDustBody);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1= new paper(200,200,30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  
 
}
function keyPressed(){
if (keyCode=== Up_ARROW){

matter.Body.applyForce(paperObject.body,paperObject.body.position{x:85,y:-85});

}



}


