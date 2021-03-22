class umbrellaAndBoy{
    constructor(x,y,width,height){
        var modifications = {
            isStatic:true
        }
        this.body = Bodies.Rectangle(x,y,width,height,modifications);
        this.width = width;
        this.height = height;
        this.image = loadImage("umbrellaAndBoy.png");

        World.add(world,this.body);
    }
    displayUmbrellaAndBoy(){
            var positionX = this.body.position.x;
            var positionY = this.body.position.y;
            push();
            translate(positionX , positionY);
            rotate(angle);
            imageMode(CENTER);
            image(this.image,0,0,this.width,this.height);
            pop();
    }
}