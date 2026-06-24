let used=false;


window.onload=function(){

showOrders();

}




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
"<br><br>Time:<br>"+
time+
"<br><br>Status: ⏳ Pending";



let orders =
JSON.parse(localStorage.getItem("orders")) || [];



orders.push({

url:url,
time:time,
status:"Pending"

});



localStorage.setItem(
"orders",
JSON.stringify(orders)
);



showOrders();



trial.style.display="block";


btn.disabled=false;


}


},40);



}




function showOrders(){


let box=document.getElementById("orders");


let orders =
JSON.parse(localStorage.getItem("orders")) || [];



if(orders.length==0){

box.innerHTML="No orders yet";

return;

}



box.innerHTML="";



orders.reverse().forEach(o=>{


box.innerHTML += `

<div class="order-card">

<b>URL:</b><br>

${o.url}


<br><br>

<b>Time:</b><br>

${o.time}


<br><br>

<b>Status:</b>

${o.status}


</div>

`;



});


}
