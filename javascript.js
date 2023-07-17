var hour=document.querySelector('.container .hour');
var minute=document.querySelector('.container .minute');
var second=document.querySelector('.container .second');
var digit=document.querySelector('.digit');

var watch;
watch=setInterval(f1,1000);



function f1(){
    var lastTime= new Date();
    var h=lastTime.getHours();
    var m=lastTime.getMinutes();
    var s=lastTime.getSeconds();
   
    second.style.transform=`rotateZ(${s*6}deg)`;
    minute.style.transform=`rotateZ(${m*6}deg)`;
    hour.style.transform=`rotateZ(${h*30 + (m/2)}deg)`;


    //digit.innerHTML=h+" : "+m+" : "+s;
}