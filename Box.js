class Box{
    constructor(x,y){
        var options = {
         'restitution':0.1,
         'friction': 1.0,
         'density': 0.4
        }
        this.body = Bodies.rectangle(x,y, 20, 40,options);
       
        World.add(World, this.body);
        };
        display(){
          var pos = this.body.position;
          
         push();
       translate(pos.x, pos.y);
       rotate(this.body.angle);
       strokeWeight(3);
      rectMode(CENTER)
      rect(0, 0, 20, 40);
       pop();
     }
   }