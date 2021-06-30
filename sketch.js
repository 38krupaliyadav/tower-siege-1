const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;
var s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16;
var p;

function preload(){
}
function setup(){
   createCanvas(800,800);
   
   engine = Engine.create();
   world = Engine.world;

   s1 = new Box(700,320,70,70);
   s2 = new Box(920,320,70,70);
   s3 = new Box(700,240,70,70);
   s4 = new Box(920,240,70,70);
   s5 = new Box(810,160,70,70);
}
function draw(){
 
}







