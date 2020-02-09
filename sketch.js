
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var log,ball,ground; 

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  
var logOptions={
    isStatic: true
  }

 log = Bodies.rectangle(200,100,200,20,logOptions);
World.add(world,log);

var ballOptions = {

  restitution : 1.0,
  density : 1.0

}

ball  = Bodies.circle(220,200,40,ballOptions);
World.add(world,ball);


var options = {
  bodyA : ball,
  bodyB : log,
  stiffness: 1,
  length : 200
}
var string = Constraint.create(options);
World.add(world,string);

fill("White");
}
function draw() {
  
  background(0); 
  Engine.update(engine);

rectMode(CENTER);
rect(log.position.x,log.position.y,200,80);


ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(8);
stroke("red");
line(ball.position.x,ball.position.y,log.position.x,log.position.y)







}








