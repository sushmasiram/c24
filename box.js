class Box{

    constructor(x,y,width,height){
        var box_options = {
            restitution: 0.8,
            density: 1,
            friction: 1.5
        }

        this.box = Bodies.rectangle(x,y,width,height,box_options);
        World.add(world,this.box);
       
        this.width = width;
        this.height = height;
        
    }

    display(){
        var pos = this.box.position
        var angle = this.box.angle;
        rectMode(CENTER);
        push();        
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white")
        rect(0,0,this.width,this.height);
        pop();

    }

}