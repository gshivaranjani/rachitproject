class Snake {
    constructor(x,y) {
        var options = {
            'isStatic' : true,
            'restitution' : 1,
            'friction' : 0
        }
        this.r = 10;
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }

    display() {
        fill("red");
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);

        if(keyIsDown(UP_ARROW)) {
            this.body.position.y = this.body.position.y - 5;
        } else if(keyIsDown(DOWN_ARROW)) {
            this.body.position.y = this.body.position.y + 5;
        } else  if(keyIsDown(RIGHT_ARROW)) {
            this.body.position.x = this.body.position.x + 5;
        } else  if(keyIsDown(LEFT_ARROW)) {
            this.body.position.x = this.body.position.x - 5;
        }
    }
}