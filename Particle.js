class Particle {
    constructor(x,y,radius){
        var options ={
            restitution: 0.5,
            friction: 0.1,
            density: 1.0
        }
        this.body = Bodies.circle(x, y, radius,options);
        this.radius = radius;
        this.color=color(random(0, 225), random(0, 225), random(0, 255));
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
    }
}