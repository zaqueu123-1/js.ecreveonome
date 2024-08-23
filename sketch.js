function setup() {
    createCanvas(600, 600)
    background("black");
  }
  
  function drawn() {
    stroke("blue");
    fill("red");
    
    if(mouseIsPressed){
      rect(mouseX, mouseY,20 ,35)
    }
    
  }