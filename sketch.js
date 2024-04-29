var mermaid, mermaidImage


function preload(){
  mermaidImage=loadAnimation("m1.png","m2.png","m3.png","m4.png")
}
function setup() {
  createCanvas(1800,1000);
 mermaid=createSprite(1500,500)
 mermaid.addAnimation("mermaid",mermaidImage)
 mermaid.scale=0.7
}

function draw() {
  background("skyblue");  
  
  drawSprites();
}