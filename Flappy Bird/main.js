// Board
    let board;
    let boardwidth=1450;
    let boardheight=720;
    let context;
// Bird
    let birdwidth=34;
    let birdheight=24;
    let birdx=boardwidth/8;
    let birdy=boardheight/2;
    let bird_img;
    let bird={
        x : birdx,
        y : birdy,
        width : birdwidth,
        height : birdheight

    }
// pipes
    let pipeArray =[];
    let pipeWidth=64;
    let pipeHeight=512;
    let pipeX = boardwidth;
    let pipeY = 0;

    let top_pipe_img;
    let bottom_pipe_img;

// game physics
    let velocityX = -2;
    let velocityY = 0;
    let gravity = 0.4;
    let gameover = false;
    score =0;




window.onload = function(){
    board = document.getElementById("board");
    board.height = boardheight;
    board.width = boardwidth;
    context = board.getContext("2d");


    // load img
    bird_img = new Image();
    bird_img.src="flappybird.png";
    bird_img.onload = function(){
    context.drawImage(bird_img,bird.x,bird.y,bird.width,bird.height);
}
    top_pipe_img = new Image();
    top_pipe_img.src="toppipe.png";

    bottom_pipe_img = new Image();
    bottom_pipe_img.src="bottompipe.png";


    requestAnimationFrame(update);
    setInterval(placepipes,1500);
    document.addEventListener("keydown",moveBird);

}

function update(){
    requestAnimationFrame(update);
    if (gameover){
        return;
    }


    context.clearRect(0,0,board.width,board.height);
    // load image of bird
        velocityY+=gravity;
        bird.y  = Math.max( bird.y+velocityY , 0 );

        context.drawImage(bird_img,bird.x,bird.y,bird.width,bird.height);

        if(bird.y>board.height){
            gameover = true;
        }
    // pipes
        for(let i=0;i<pipeArray.length;i++){
            let pipe  = pipeArray[i];
            pipe.x+=velocityX;
            context.drawImage(pipe.img,pipe.x,pipe.y,pipe.width,pipe.height);
            if(!pipe.passed && bird.x > pipe.x + pipe.width){
                score+=0.5;
                pipe.passed=true;
            }
            if (detectCollision(bird,pipe)){
                gameover = true;
            }
            }

    // clear pipes
            while(pipeArray.length>0 && pipeArray[0].x<-pipeWidth){
                pipeArray.shift();//removes first element in array
            }
    // score
            context.fillStyle = "white";
            context.font="45px sans-serif";
            context.fillText(score,5,45);
            if(gameover){
                
            context.fillStyle = "red";
            context.fillText(score,680,320);
                context.fillText("GAME OVER",550,370)
            }

}

function placepipes(){
    if (gameover){
        return;
    }
    let randomPipeY = pipeY - pipeHeight/4 -Math.random()*(pipeHeight/2);
    let openingSpace = board.height/4;
    let topPipe = {
        img : top_pipe_img,
        x : pipeX,
        y : randomPipeY,
        width : pipeWidth,
        height : pipeHeight,
        passed:false
    }
    pipeArray.push(topPipe);
    let bottomPipe = {
        img : bottom_pipe_img,
        x : pipeX,
        y : (randomPipeY+pipeHeight+openingSpace),
        width : pipeWidth,
        height : pipeHeight,
        passed:false
    }
    
    pipeArray.push(bottomPipe);
}
function moveBird(e){
    if(e.code=="Space"||e.code=="ArrowUp"){
        // jump
            velocityY = -6;
        // reset game
            if(gameover){
                bird.y=birdy;
                pipeArray=[];
                score=0;
                gameover=false;
            }
    }
}
function detectCollision(a,b){
    return a.x < b.x + b.width  &&
           a.x + a.width> b.x   &&
           a.y < b.y + b.height &&
           a.y + a.height > b.y ;
}