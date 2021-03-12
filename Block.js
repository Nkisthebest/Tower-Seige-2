class Block{
    constructor(x,y,width,height,color){
       var options ={
           isStatic:false
       }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       this.color=color;
       this.visibiity = 255;
       World.add(world,this.body);
    };
    display(){
        if((this.body.speed)<3){
            var pos =this.body.position;
            rectMode(CENTER);
            fill(this.color);
            rect(pos.x, pos.y, this.width, this.height);
          }
          else{
            World.remove(world, this.body);
            push();
            this.visibiity-=5;
            tint(255,this.visibiity);
            pop();
          }
      }
}