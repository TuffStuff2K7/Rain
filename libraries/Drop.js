class Drop{

    constructor(){
        this.x = random(-400, width);
        this.y = random(height);
        this.z = random(1, 10);
    }

    fall(){
        this.y = this.y + this.z * 1.5;
        this.x = this.x + 2 + this.z/3;
        if(this.y > height){
           this.y = random(0, -100);
           this.x = random(-400, width);
        }
    }

    draw(){
        stroke("#dbe6fd");
        strokeWeight(this.z/4);
        line(this.x, this.y, this.x + 2 + this.z/3, this.y + 10 + this.z);
    }

}