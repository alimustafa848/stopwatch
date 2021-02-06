msec = 0;
sec = 0;
min = 0;
var msecheading = document.getElementById("msec")
var secheading = document.getElementById("sec")
var minheading = document.getElementById("min")
function timer(){
    msec++;
    msecheading.innerHTML = msec;
    if(msec>=100)
    {
        sec++;
        secheading.innerHTML = sec;
        msec = 0;
    
    }
    else if(sec>=60)
    {
        min++;
        minheading.innerHTML = min;
        sec = 0;
        msec = 0;
    }
}


function start(){
  interval = setInterval(timer,10)
  btn.disabled = true;
}
function stop(){
clearInterval(interval)
btn.disabled = false;
}
function reset(){
    msec = 0;
    sec = 0;
    min = 0;
    msecheading.innerHTML = msec;
    secheading.innerHTML = sec;
    minheading.innerHTML = min;
    stop()
}

function btndisabled(){
var btn = document.getElementById("btn")
}