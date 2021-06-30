class Polygon{
 constructor(x,y){
     var options = {
      'restitution':0.5,
      'friction': 1.0,
      'density': 0.4
     }
     this.body = Bodies.rectangle(x,y, 20, 20,options);
     this.image = loadImage("polygon.png");
     World.add(World, this.body);
     };
     display(){
       var pos = this.body.position;
       
      push();
    translate(pos.x, pos.y);
    rotate(this.body.angle);
    strokeWeight(3);
   imageMode(CENTER)
   image(this.image, 0, 0, 20, 20);
    pop();
  }
}