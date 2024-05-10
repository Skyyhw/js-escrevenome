function setup() {
    createCanvas(600, 600);
     background("white");
  }
  
  function draw() {
   
  
    stroke("red");
    fill("purple");
  
    //console.log (mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 25, 35);
    }
  }
  