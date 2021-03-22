const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var umbrellaAndBoy1 , umbrellaAndBoyImage;
var maxDrops = 100;
var drops = [];
var thunderImage, thunder;


function preload(){
    thunderImage = loadImage(thunder,"Thunder.jpg");
    umbrellaAndBoyImage = loadImage(umbrellaAndBoy1,"umbrellaAndBoy.jpg")

}

function setup(){
createCanvas(500,1000); 

engine = Engine.create();
world = engine.world;

umbrellaAndBoy1 = new umbrellaAndBoy(250,700,150,600);
 
for (let i = 0; i <maxDrops ; i++) {
     drops.push(new Drop(random(0,500), random(0,300),5,5));
 }

 if (frameCount % 50 === 0) {
    addImage(thunder);
    if (frameCount % 12 === 0) {
     removeImage(thunder);
    }
 }
}

function draw(){
background("Black");

umbrellaAndBoy1.displayUmbrellaAndBoy();

drops.displayDrops();
}   

