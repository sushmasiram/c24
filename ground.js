class Ground{

    constructor(x,y,width){
        var options = {
            isStatic: true
        }

        this.ground = Bodies.rectangle(x,y,width,10,options);
        World.add(world,this.ground);
       
        this.width = width;
        this.height = 10;     
        
    }

    display(){
        var pos = this.ground.position
        
        rectMode(CENTER);         
        rect(pos.x,pos.y,this.width,this.height);  

    }

}