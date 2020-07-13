class Platform{
    constructor(y){
        var options = {
            isStatic: true
        }
        this.platform = Bodies.rectangle(random(15, 300),y,85,15,options);
        World.add(world,this.platform);
        this.image = loadImage("doodle-jump-platform.png");
    }
    display(){
        var pos = this.platform.position;
        //fill(106, 186, 40);
        image(this.image, pos.x, pos.y, 85,15);
    }
    drawPlatforms(){
        platformList.forEach(function(plat) {
            //console.log(plat);
            image(plat.image, plat.platform.position.x, plat.platform.position.y, 85,15);
            plat.platform.position.y += platYChange;
            if(plat.platform.position.y > 600) {
                score++;
                platformList.pop();
                var newPlat = new Platform(0);
                platformList.unshift(newPlat); 
        }
    });
     //var newPlat = new Platform(0);
    }

    setupPlatforms() {
    for(var i=0; i < 5; i++) {
        var platGap = 600 / 5;
        var newPlatformYPosition = i * platGap;
       
        var plat = new Platform(newPlatformYPosition);
        platformList.push(plat);
       // console.log(platformList);
  }
}
    Platform(newPlatformYPosition) {
        var plat = new Platform(newPlatformYPosition);
        plat.platform.position.x = random(15, 300);
        plat.platform.position.y = newPlatformYPosition;
        this.width = 85;
        this.height = 15;
        //console.log(plat.platform.position.y);
}
}