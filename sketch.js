const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var s;
var s = new Snake(100,100);
function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

   s = new Snake(100,100);
  
}

function draw() {
  background(255,255,255);  
  
  s.display();
}

