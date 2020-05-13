const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground1;
var pig1;
var log1;
var log2;
var box3;
var box4;
var bird1;
var log3;
var log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new box(700,320,70,70);
    box2 = new box(920,320,70,70);
    ground1 = new ground(600,390,1200,20);
    pig1 = new pig(810,350);
    log1 = new log(810,260,300);
    log2 = new log(810,180,300);
    box3 = new box(700,240,70,70);
    box4 = new box(920,240,70,70);
    bird1 = new bird(100,100);
    log3 = new log(760,120,150,PI/7);
    log4 = new log(870,120,150,-PI/7);
 }

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground1.display();
    pig1.display();
    log1.display();
    log2.display();
    box3.display();
    box4.display();
    bird1.display();
    log3.display();
    log4.display();
}