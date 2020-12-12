class connection{
    constructor(bodyA, pointB){
        this.bodyA=bodyA;
        this.pointB =pointB;

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    fly (){
      this.chain.bodyA=null;
    } 

    //to reconnect stonebody with constraint by clicking space bar
    attach(bodyA){
        this.chain.bodyA=bodyA;
    }

    display(){
        if (this.chain.bodyA!==null){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
