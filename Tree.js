class tree{
    constructor(x,y,w,h,){
var options={
    'isStatic':true,
}

this.x=x;
this.y=y
this.width=w;
this.height=h;
this.body=Bodies.rectangle(x,y,width,height,options);
this.image=loadImage("tree1.png");
World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}

