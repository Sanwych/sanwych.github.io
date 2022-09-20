const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1600
canvas.height = 900

const imagen = new Image()
imagen.src ="./img/gamermap.png"

const foregroundImg = new Image()
foregroundImg.src ="./img/fore.png"

const playerDown = new Image()
playerDown.src = "./img/playerDown.png"

const playerUp = new Image()
playerUp.src = "./img/playerUp.png"

const playerRight = new Image()
playerRight.src = "./img/playerRight.png"

const playerLeft = new Image()
playerLeft.src = "./img/playerLeft.png"




context.fillRect(0,0,canvas.width, canvas.height)

const offsetX = -1185;
const offsetY= -500

const mainChar = new Propiedades({
    position:{
        x:canvas.width / 2 - 192 / 3, 
        y:canvas.height / 2 - 68 / 2,
    }, 
    image:playerDown,
    frames:{
        default:4,
    },
    sprites:{
        down:playerDown,
        up:playerUp,
        right:playerRight,
        left:playerLeft
    }  
})

const background = new Propiedades({
    position:{
    x: offsetX,
    y: offsetY
    },
    
    image:imagen
    })


const foreground = new Propiedades({
    position:{
        x: offsetX,
        y: offsetY
        },
        
        image:foregroundImg
        })


var collisionMap = []

for(let i = 0; i < colisiones.length; i += 70){

    let slices = colisiones.slice(i, 70 + i)
    collisionMap.push(slices)

}


const boundaries = []

collisionMap.forEach((row, i) => {
 row.forEach((symbol, j) => {
 if(symbol === 1025){
    
    boundaries.push(new Boundary({
    position:{
        x: Boundary.width * j + offsetX,
        y: Boundary.height * i + offsetY
    }  
}

))}})})

    const movableItem = [background, ...boundaries, foreground]

    function checkCollision({e1,e2}){
        return   (e1.position.x + e1.width >= e2.position.x &&
                  e1.position.x <= e2.position.x + e2.width &&
                  e1.position.y <= e2.position.y + e2.height &&
                  e1.position.y + e1.height >= e2.position.y)
    }

   
    let moving  = false
    
    function move(){

        let movementW = 0
        let movementA = 0
        let movementS = 0
        let movementD = 0

        if(teclas.W) movementW +=3
        if(teclas.A) movementA -=3 
        if(teclas.S) movementS -=3 
        if(teclas.D) movementD +=3

        if(movementW + movementS !== 0 && movementA + movementD !== 0 ){
            movementW *= 0.7
            movementA *= 0.7
            movementS *= 0.7
            movementD *= 0.7
        } 

        for(let i = 0; i < boundaries.length;i++){
            const boundary = boundaries[i]

            if(
                checkCollision({
                 e1:mainChar,
                 e2:{
                    ...boundary
                    ,position:{
                   x: boundary.position.x,
                   y: boundary.position.y + 3,
                 }}
                }
                )){
                    movementW = 0
                }

            if(
                checkCollision({
                 e1:mainChar,
                 e2:{
                     ...boundary
                    ,position:{
                     x: boundary.position.x + 3,
                    y: boundary.position.y,
                    }}
                 }
                )){
                        movementA = 0
                 }   
                 
                 
                 if(
                    checkCollision({
                     e1:mainChar,
                     e2:{
                        ...boundary
                        ,position:{
                       x: boundary.position.x,
                       y: boundary.position.y - 3,
                     }}
                    }
                    )){
                        movementS = 0
                    }
    
                if(
                    checkCollision({
                     e1:mainChar,
                     e2:{
                         ...boundary
                        ,position:{
                         x: boundary.position.x - 3,
                        y: boundary.position.y,
                        }}
                     }
                    )){
                            movementD = 0
                     } 
                        
         }

            movableItem.forEach((movableItem) =>{
                movableItem.position.x -= movementD + movementA
                movableItem.position.y += movementW + movementS
                
                if(movementW+movementA+movementS+movementD !== 0){
                    moving = true
                    mainChar.moving = true
                } else {
                    moving = false
                    mainChar.moving = false
                }

                

                if(teclas.A) mainChar.image = playerLeft
                if(teclas.D) mainChar.image = playerRight
                if(teclas.W) mainChar.image = playerUp
                if(teclas.S) mainChar.image = playerDown

                })

            

    }

    

    
  

function animation(){

    console.log(moving)

    
    
    window.requestAnimationFrame(animation) 
    
    background.draw()
    
    boundaries.forEach(boundary => {
        boundary.draw()    
    
    })

    mainChar.draw()

     foreground.draw()
  
    
  if(sidebar.classList.contains('off')){

    move()

     
        
    
 
    
}
}

animation()









 










