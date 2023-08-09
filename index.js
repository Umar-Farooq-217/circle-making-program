var request;
var i = 0 ;

const stop = document.getElementById('stop');
const start = document.getElementById('start');
const frame = document.getElementById('frame');
var getdiv = document.getElementById("dot");


//60Hz
const performAnimation = () =>{
    request = requestAnimationFrame(performAnimation);
    getdiv[0].insertAdjacentHTML ("afterend","<div class='dot'></div><div class='dot'></div><div class='dot'></div><div class='dot'></div><div class='dot'></div>")
    console.log(i++);
}
start.addEventListener("click",function(){
    console.log(i);
    // request = setInterval(performAnimation,1000/60);
    request = requestAnimationFrame(performAnimation);
})

stop.addEventListener("click",function(){
    // clearInterval(request);
    cancelAnimationFrame(request);
})















