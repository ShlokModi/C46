class Doodler{
    constructor(){
        var options = {
            restitution: 1.0
        }
        this.doodler = Bodies.rectangle(200,350,60,60,options);
        World.add(world,this.doodler);
        this.doodlerLeftImg = loadImage("doodle-jump-doodler.png");
        //this.doodlerRightImg = loadImage("doodle-jump-doodler-right.png");
    }
    display(){
        var pos = this.doodler.position;
        console.log(this.doodler);
        fill(204, 200, 52);
        image(this.doodlerLeftImg, pos.x, pos.y, 60, 60);
    }
}