var bgimg,bg,go,redo,redoimg
var bowlimg,bowl
var score,lives
var ingredients,noodles,egg,seaweed
var obs,pepper,hs
var rewg,obsg
var gameState
gameState = "play"



function preload(){


  
  bg = loadImage("bg.jpeg")
  bowl = loadImage("bowl.png")
  noodles = loadImage("noodles.png")
  egg = loadImage("egg.png")
  seaweed = loadImage("seaweed.png")
  pepper = loadImage("peper.png")
  hs = loadImage("hot sauce.png")
  go = loadImage("go.jpg")
  redoimg = loadImage("restart.png")
}
function setup(){

  createCanvas(1300,900)

  bgimg = createSprite(500,300,1000,1000);
  bgimg.addImage("ground",bg);
  bgimg.addImage("game over", go)
  bgimg.scale = 1.2
  bowlimg = createSprite(500,800,20,20);
  bowlimg.addImage("bowl",bowl);
  bowlimg.debug = false
  bowlimg.setCollider("rectangle",0,0,150,150)

  
  obsg = new Group()
  rewg = new Group()
  score = 0
  lives = 3
  console.log("cheat codes:   if you hold down g then k then y and hold them down you will be invincable")
  console.log("and if you hold down h then j you will get a lot of points")
}





 



  

function draw(){
  
  background(0)

  if(gameState === "play"){
    if(keyDown("g")){
      if(keyDown("k")){
        if(keyDown("y")){
          ingredients.x = world.mouseX
          obs.x = mouseX - 200
          
        }
      }
    }

    if(keyDown("h")){
      if(keyDown("j")){
        score = score + 1210
      }
    }
    if (lives<1){
      gameState = "end"


    }
      
      spawnreward()
      spawnobs()
      for(var i = 0;i<rewg.length;i++){
        if(bowlimg.isTouching(rewg[i])){
          score = score + 10
           rewg[i].destroy()
           ingredients.velocityY = ingredients.velocityY + 0.5
           obs.velocityY = obs.velocityY + 0.5
        }  
      }
   
   
   
   
   
      for(var i = 0;i<obsg.length;i++){
        if(bowlimg.isTouching(obsg[i])){
          lives = lives - 1
          score = score - 10
           obsg[i].destroy()
  
        }  
      }
      bowlimg.x = mouseX


  }//this is end of function
else if(gameState === "end"){
  bgimg.changeImage("game over", go)
  redo = createSprite(650,450)
  redo.addImage(redoimg)
  redo.debug = false
  redo.setCollider("circle",0,0,150)
  if(mousePressedOver(redo)) {
    reset()
}
}

 








    drawSprites()
    text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY)
    textSize(40)
    fill("blue")
    text("Score: " + score + "   lives: " + lives, 500,100)
}
function spawnreward(){
if (frameCount % 80 === 0) {
  
  ingredients = createSprite(random(100, 1000), 0, 100, 100);
  ingredients.velocityY = 30;
  ingredients.setCollider("rectangle",0,0,60,60)
  var rand = Math.round(random(1,3));
  switch(rand){
      case 1: ingredients.addImage("noodles",noodles);
      break;
      case 2: ingredients.addImage("egg", egg);
      break;
      case 3: ingredients.addImage("seaweed", seaweed);
      break;
  }
   rewg.add(ingredients)
 }
}










 
    // text("lives: " + lives, 700,100)
    



 
 
 function spawnobs(){
   if (frameCount % 40 === 0) {
   obs = createSprite(random(100, 1000), 0, 100, 100);
   obs.velocityY = 35;
   obs.setCollider("rectangle",0,0,60,120)
   var rand = Math.round(random(1,2));
   switch(rand){
       case 1: obs.addImage("hs",hs);
       obs.setCollider("rectangle",0,0,60,200)
       obs.debug = false 
       break;
       case 2: obs.addImage("pepper", pepper);
       break;
 
   }
   obsg.add(obs)
  }
 }

 function reset(){
  gameState = "play"
  
  score = 0 
  lives = 3
  bgimg.changeImage("ground")
}

  

