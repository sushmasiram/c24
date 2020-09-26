class Pig{

    constructor(x,y,){
        var options = {
            restitution: 0.8,
            density: 1,
            friction: 1.5
        }

        this.box = Bodies.rectangle(x,y,40,40,options);
        World.add(world,this.box);
       
        this.width = 40;
        this.height = 40;
        
        
    }

    display(){
        var pos = this.box.position
        var angle = this.box.angle;
        rectMode(CENTER);
        push();        
        translate(pos.x,pos.y);
        rotate(angle);
        fill("pink");
        rect(0,0,this.width,this.height);
        pop();

    }

}