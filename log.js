class Log{

    constructor(x,y,width,angle){
        var options = {
            'restitution': 0.8,
            'density': 1,
            'friction': 1
        }

        this.log = Bodies.rectangle(x,y,width,10,angle,options);
        
        Matter.Body.setAngle(this.log,angle);
        World.add(world,this.log);
        this.width = width;
        this.height = 10;
        //console.log(this.box)
        
    }

    display(){
        var pos = this.log.position
        var angle = this.log.angle;
        rectMode(CENTER);
        push();        
        translate(pos.x,pos.y);
        rotate(angle);
        fill("green");
        rect(0,0,this.width,this.height);
        pop();

    }

}