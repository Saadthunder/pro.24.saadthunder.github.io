class PlayerArcher {
constructor(x,y,width,height,angle) {
   
      this.body = Bodies.rectangle(x, y, width, height,angle);
  
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.image = loadImage("./assets/playerArcher.png");
  
      World.add(world, this.body);

      Matter.Body.setAngle(this.body,-PI/2);

    
}



display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
    if(keyIsDown(RIGHT_ARROW) && angle < 1.77){
      angle = angle + 0.01;
      Matter.Body.setAngle(this.body,angle);
    }
  
    if(keyIsDown(LEFT_ARROW) && angle > 1.47){
      angle = angle - 0.01;
      Matter.Body.setAngle(this.body,angle);
    }
    }
  
   
}

















