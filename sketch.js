//Create variables here
var dog, happydog, database, foodS, foodStock,dogimage;
function preload()
{
  //load images here
  dogimage = loadImage("Dog.png");
  happydog=loadImage("happydog.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog=createSprite(250,250,50,50);
  dog.addImage("dog",dogimage)
  dog.addImage("happydogu",happydog);
  dog.scale = 0.25;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
  drawSprites();
  //add styles here
  textSize(15);
fill("red");
stroke(4)
text("Note:Press UP_ARROW KEY TO FEED DRAGO MILK",75,75);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.changeImage("happydogu",happydog)}
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
if(x<=0){
x=0;}
else{
x=x-1;

}

database.ref('/').update({
  Food:x
})


}

