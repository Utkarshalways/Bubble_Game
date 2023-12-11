var timer = 60;
var score = 0;
var r;

function incrementscore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


function makebubble(){
    
    var cluster = "";
    
    for(let i =1;i<= 114;i++){
        var rn = Math.floor(Math.random()*10);
        
        cluster += `<div class="bubble">${rn}</div>`
        
    }
    
    document.querySelector("#pabtm").innerHTML = cluster;
    
}


function runtimer(){

   let clearint =  setInterval(function(){

        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;

        }
        else{
            document.querySelector("#pabtm").innerHTML =  `Your Score is --> ${score}`;

            clearInterval(clearint);
        }

    },1000)

}

function newhit(){
     r = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = r;
}

document.querySelector("#pabtm").addEventListener("click",function(details){
        // console.log(Number(details.target.textContent));
    var clickednum = Number(details.target.textContent);

    if(r == clickednum){
        incrementscore();
        makebubble();
        newhit();
    }
})
    makebubble();
    runtimer();
    newhit();
    