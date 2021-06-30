const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,polygonImg,bgImg;
function preload(){
  polygonImg=loadImage("polygon.png")
}
function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
  block1 = new Block(280,275,30,40);  
  block2 = new Block(310,275,30,40);
  block3 = new Block(340,275,30,40);
  block4 = new Block(370,275,30,40);
  block5 = new Block(400,275,30,40);
  block6 = new Block(430,275,30,40);
  block7 = new Block(460,275,30,40);
  block8 = new Block(490,275,30,40);

  block9 = new Block(310,235,30,40);
  block10 = new Block(340,235,30,40);
  block11 = new Block(370,235,30,40);
  block12 = new Block(400,235,30,40);
  block13 = new Block(430,235,30,40);
  block14 = new Block(460,235,30,40);

  block15 = new Block(340,150,30,40);
  block16 = new Block(370,150,30,40);
  block17 = new Block(400,150,30,40);
  block18 = new Block(430,150,30,40);

  block19 = new Block(370, 110)
  block20 = new Block(400, 110)

  block21 = new Block(385,50,30,40);


  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);

  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);

  block420 = new Block(700,20,30,40);

  ground1=new Ground(500,390,1000,20);
  ground2=new Ground(380,300,270,10);
  ground3=new Ground(700,200,200,10);
  var options={
    density:2.5,
    restitution:0.5,
    friction:1.2,
  }
  polygon=Bodies.circle(200,200,20,options);
  World.add(world,polygon);
  chain1=new SlingShot(this.polygon,{x:200,y:200});
}
function draw() {
  background("black"); 
  Engine.update(engine);

  textSize(15);
  fill("yellow");
  text("Press space to get another chance",50,100);
  text("Drag the Stone and realease it to throw it towards the blocks",220,50)

  fill("skyblue")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  stroke(15)
  fill("pink")
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
 stroke(15)
 fill("cyan")
 block15.display();
 block16.display();
 block17.display();
 block18.display();
    stroke(15)
    fill("green")
  block19.display();
  block20.display();
  block420.display();
 
 stroke(15)
 fill("gray")
  block21.display();

  stroke(15)
  fill("skyblue")
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  stroke(15)
  fill("cyan")
  blocks6.display();
  blocks7.display();
  blocks8.display();
  chain1.display();
  ground1.display();
  ground2.display();
  ground3.display();
  imageMode(CENTER);
  image(polygonImg,this.polygon.position.x,this.polygon.position.y,40,40);
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  chain1.fly();
}
function keyPressed(){
  if (keyCode===32){
      chain1.attach(this.polygon);
  }
}