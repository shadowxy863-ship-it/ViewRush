let used=false;


function start(){


let url=document.getElementById("url").value;


let btn=document.getElementById("btn");



if(url==""){

alert("Please enter YouTube URL");

return;

}



btn.disabled=true;



let process=document.getElementById("processBox");

let done=document.getElementById("done");

let trial=document.getElementById("trial");



process.style.display="block";

done.style.display="none";



let count=0;



let timer=setInterval(()=>{


count++;


document.getElementById("progress")
.style.width=count+"%";



document.getElementById("percent")
.innerHTML=count+"%";



if(count>=100){


clearInterval(timer);



process.style.display="none";

done.style.display="block";



let time=new Date()
.toLocaleString();



document.getElementById("info")
.innerHTML=

"Video URL:<br>"+
url+
"<br><br>Order Time:<br>"+
time+
"<br><br>Status: ⏳ Pending Processing";



if(!used){

used=true;


setTimeout(()=>{

trial.style.display="block";

},1000);


}


btn.disabled=false;


}


},40);



}
