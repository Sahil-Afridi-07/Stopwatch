let [seconds, minutes, hours]=[0,0,0];

let displayTime=document.querySelector('#displayTime');
let playbtn=document.querySelector('#play');
let stopbtn=document.querySelector('#stop');
let resetbtn=document.querySelector('#reset');

let interval;
let isRunning=false;

playbtn.addEventListener("click",()=>{
    if(!isRunning){
        isRunning=true;
        playbtn.innerHTML='<i class="fa-solid fa-circle-pause"></i>'
        interval=setInterval(()=>{
            seconds++;
            if(seconds===60){
                seconds=0;
                minutes++;
                if(minutes===60){
                    minutes=0;
                    hours++;
                }
            }
            let h=hours<10? "0"+hours:hours;
            let m=minutes<10? "0"+minutes:minutes;
            let s=seconds<10 ? "0"+seconds:seconds;
            displayTime.innerHTML=`${h}:${m}:${s}`;
        },1000)
    }
    else{
        isRunning=false;
        playbtn.innerHTML='<i class="fa-solid fa-circle-play"></i>';
        clearTimeout(interval);
    }
})
stopbtn.addEventListener("click",()=>{
    clearInterval(interval);
    playbtn.innerHTML='<i class="fa-solid fa-circle-play"></i>'
})
resetbtn.addEventListener("click",function(){
    clearInterval(interval);
    [seconds, minutes, hours]=[0,0,0];
    displayTime.innerHTML="00:00:00"
    playbtn.innerHTML='<i class="fa-solid fa-circle-play"></i>'
})
