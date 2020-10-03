class Plinko {
    constructor(x,y,radius){
        var options ={
            restitution: 0.5,
            friction: 0.3,
            density: 1.0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        fill("white");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius); 
    }
}