const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;


function setup(){
    var canvas = createCanvas(1880,630);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,3000,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300,70);
    box6 = new Box(300,300,50,50);
  box7 = new Box(310,310,50,50);
  box8 = new Box(320,320,50,50);
  box9 = new Box(330,320,50,50);
  box10 = new Box(340,320,50,50);
  box11 = new Box(350,320,50,50);
  box12 = new Box(360,320,50,50);
  box13 = new Box(370,320,50,50);
  box14 = new Box(380,320,50,50);
  box15 = new Box(390,320,50,50);
  box16 = new Box(400,320,50,50);
  box17 = new Box(410,320,50,50);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, 70);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150,70);
    log5 = new Log(870,120,150,70);

    bird = new Bird(100,100);

}

function draw(){
    background("black");
    Engine.update(engine);
  
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   box16.display();
   box17.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
}
