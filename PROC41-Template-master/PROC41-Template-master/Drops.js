class Drop {
    constructor(x,y,width,height){
        var modifications = {
            isStatic:false,
            friction:0.15
        }
        this.drop = Bodies.Rectangle(x,y,width,height,modifications);
        this.width = width;
        this.height = height;
        this.image = loadImage("raindrop.png");

        World.add(world,this.drop);
    }

    repositionDrops(){
        if (this.drop.position.y > 1000) {
            Matter.Body.setPosition(this.drop, {x:random(0,500) , y:random(0,300)});
        }
    }

    displayDrops(){
        var positionX = this.drop.position.x;
        var positionY = this.drop.position.y;
        var angle = this.drop.angle;
        push();
        translate(positionX , positionY);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}