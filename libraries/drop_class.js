//drop class

class Drop{

    constructor(){
        
        this.x = random(-400, width);
        this.y = random(height);
        this.z = random(1, 10);
    
    }
  
    fall(){
        
        this.y = this.y + this.z * 3;
        this.x = this.x + 3 + this.z/3;
        
        if(this.y > windowHeight + 120){
           
            this.y = random(0, -100);
            this.x = random(-400, width);
        
        }
   
    }
  
    draw(){
        
        stroke("#dbe6fd");
        strokeWeight(this.z/4);
        
        if(this.x && this.y && this.z){
            line(this.x, this.y, this.x + 2 + this.z/3, this.y + 10 + this.z);
        }

    }
  
  }