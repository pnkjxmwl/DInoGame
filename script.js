score= 0;
cross=true;
document.onkeydown = function(e){
    console.log(e.keyCode);
    if(e.keyCode==38){
        dino=document.querySelector(".dino");
        dino.classList.add('animatedino');
        setTimeout(() => {
           dino.classList.remove('animatedino'); 
        }, 1500);
    }
    if(e.keyCode==39){
        dino=document.querySelector(".dino");
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left= dinoX+100 +"px";
    }
    if(e.keyCode==37){
        dino=document.querySelector(".dino");
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left= dinoX-100 +"px";
    }
}
setInterval(() => {
    
    dino=document.querySelector(".dino");
    obstacle=document.querySelector(".obstacle");
    gameover=document.querySelector(".gameover");

    dx= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy= parseInt(window.getComputedStyle(dino,null).getPropertyValue('bottom'));

    ox= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('bottom'));

    console.log(dx,ox);
    console.log(dy,oy);
    diffx= Math.abs(dx-ox);
    diffy=Math.abs(dy-oy);

    if(diffx<220 &&  diffy<100){
    gameover.innerHTML = "Game Over - Reload to Play Again"
    obstacle.classList.remove('obstacleAni');
        }
        else if(diffx<500 && cross){
            score+=1;
            myscore= document.querySelector(".score");
            myscore.innerHTML="SCORE: "+ score;
            cross=false;
            setInterval(() => {
                cross=true;
            }, 1000);

        }
}, 10);