class Boundary {

    static width = 48
    static height = 48

    constructor({position}){
        this.position = position
        this.width = 48
        this.height = 48
    }

    draw(){
        context.fillStyle = ' rgba(255,0,0,0.5) '
        context.fillRect(this.position.x,this.position.y, this.width, this.height)  
    }   
}

class Propiedades{
    
    constructor({position,image, frames = {default: 1}, sprites}){
        this.position = position
        this.image = image   
        this.frames = {...frames, val : 0, elapsed : 0}
        this.sprites = sprites
        this.width = 48
        this.height = 63
        this.moving = false
        this.sprites = sprites
    
    }
     draw(){
        context.drawImage(this.image, 
  
            this.frames.val * this.width,
            0,
            this.image.width / this.frames.default , 
            this.image.height,  
            this.position.x,
            this.position.y, 
            this.image.width / this.frames.default , 
            this.image.height
            
            )
            
            if(this.moving){

                if(this.frames.default > 1)
                this.frames.elapsed++
                 
                if(this.frames.elapsed % 10 == 0)
    
                if(this.frames.val < this.frames.default - 1 ){
                    this.frames.val++ 
                } else{
                    this.frames.val = 0
                }

            
        }
    }
}

