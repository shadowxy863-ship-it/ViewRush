function start(){


let url =
document.getElementById("url").value;



if(url==""){

alert("Please enter YouTube URL");

return;

}



let process =
document.getElementById("processBox");


let done =
document.getElementById("done");



process.style.display="block";

done.style.display="none";



let count=0;



let timer=setInterval(function(){


count++;


document.getElementById("progress")
.style.width=count+"%";



document.getElementById("percent")
.innerHTML=count+"%";




if(count>=100){


clearInterval(timer);



process.style.display="none";

done.style.display="block";



let now =
new Date().toLocaleString();



document.getElementById("info")
.innerHTML=

"Video URL:<br>"+

url+

"<br><br>Order Time:<br>"+

now+

"<br><br>Status: ⏳ Pending Processing";



}


},50);



}
