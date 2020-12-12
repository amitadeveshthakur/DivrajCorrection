class mango{
 constructor(x,y,r){

    var options={
        'isStatic': true,
        'friction': 1,
        'restitution':0.3
    }
this.x=x;
this.y=y
this.r=r;
this.body=Bodies.rectangle(x,y,width,height,options);
this.image=loadImage("mango.png");
World.add(world,this.body);
 }

 display(){
    var pos=this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.r,this.r);

 }
 

}