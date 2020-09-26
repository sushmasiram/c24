Engine = Matter.Engine
World = Matter.World
Bodies = Matter.Bodies

var engine,World;
var box1,ground;

function setup() {

  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  box1 = new Box(200,200,50,50)
  box2 = new Box(440,200,50,50)
  log1 = new Log(320,190,300,PI);
  pig1 = new Pig(310,200,40,40);

  box3 = new Box(200,100,50,50)
  box4 = new Box(440,100,50,50)
  log2 = new Log(320,90,300,PI);
  pig2 = new Pig(310,100,40,40);
  
  ground = new Ground(400,390,width)
  World.add(world,ground)
  
}

function draw() {

  background("orange"); 
  Engine.update(engine)

  
  fill("brown")
  //rect(ground.position.x, ground.position.y, width*2, 10);
  box1.display();
  box2.display();
  ground.display();
  log1.display();
  pig1.display();

  box3.display();
  box4.display();
  log2.display();
  pig2.display();
}