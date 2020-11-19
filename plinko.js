class plinko {
    constructor(x, y, r) {
    var options = {
        isStatic: true,
        //restitution: 0,
        //friction:1

     }
     //this.image = loadImage("Plucking mangos images/mango.png");
     this.x=x;
     this.y=y;
     this.r=r;
     this.body = Bodies.circle(this.x, this.y, this.r/2, options);
     //this.width = 20;
     //this.height = 20;
          
     World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(this.body.angle);
          ellipseMode(CENTER);
          fill("pink");
          ellipse(0, 0, this.r, this.r);
          //strokeWeight(4);
          //stroke("white");
          //image(this.image, 0, 0, this.r*2, this.r*2);
          pop();
        }
     

}