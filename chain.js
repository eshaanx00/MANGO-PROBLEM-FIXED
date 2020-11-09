class Chain {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length:10
        }
        this.cons = Constraint.create(options);
        World.add(world, this.cons);
    }
    attach(body) {
        this.cons.bodyA = body;
    }

    fly() {
        this.cons.bodyA = null;
    }
    display() {
        if (this.cons.bodyA) {
            strokeWeight(4);
            var bodyA = this.cons.bodyA.position;
            var pointB = this.cons.pointB;
            line(bodyA.x, bodyA.y, pointB.x, pointB.y);
        }
    }

    
}