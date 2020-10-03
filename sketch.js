var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
  dog = loadImage("doglmg.png");
  happyDog = loadImage("doglmg1.png");

}

function setup() {
  createCanvas(500, 500);
  database=firebase.database ();
  dog = createSprite(250,250,10,10);
  dog.shapeColor = "red";

var dogpositionref=database.ref('dog/position');
dogpositionref.on("value",readposition,showerror);
}
  



function draw() {  

  
  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  drawSprites();
  text= foodStock 
  fil()
  stroke()
}
function readStock(data){
  food=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({

  })
}

