function setup() {
    createCanvas(400, 400);
    background(0);
  }
  
  // Controles:
  // Cualquier tecla: cambio de color
  
  function draw() {
    if (keyIsPressed == true) {
      background(255);
  
      noStroke();
      fill(255, 140, 200);
      rect(50, 50, 120, 260);
  
      fill(215, 170, 255);
      rect(170, 50, 120, 80);
  
      fill(190, 120, 200);
      rect(290, 50, 50, 80);
  
      fill(255, 100, 200);
      rect(290, 130, 50, 180);
  
      fill(255, 100, 200);
      rect(180, 290, 160, 60);
  
      fill(200, 100, 180);
      rect(60, 290, 120, 60);
  
      fill(120, 180, 210);
      rect(170, 130, 120, 160);
  
      fill(100, 205, 205);
      rect(35, 290, 170, 40);
    } else {
      background(0);
  
      //cuadrados 1
      noStroke();
      fill(230, 0, 0);
      rect(50, 50, 120, 260);
  
      fill(240, 0, 0);
      rect(170, 50, 120, 80);
  
      fill(190, 0, 0);
      rect(290, 50, 50, 80);
  
      fill(300, 100, 0);
      rect(290, 130, 50, 180);
  
      fill(300, 100, 0);
      rect(180, 290, 160, 60);
  
      fill(80, 100, 0);
      rect(60, 290, 120, 60);
  
      fill(150, 0, 0);
      rect(170, 130, 120, 160);
  
      fill(255, 255, 255);
      rect(35, 290, 170, 40);
    }
  }
  