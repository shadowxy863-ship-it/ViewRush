const STORAGE_KEY="viewrush_orders";


window.onload=function(){

showOrders();
updateStats();

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



process.style.display="block";
done.style.display="none";

document.getElementById("trial").style.display="none";



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



let time=new Date().toLocaleString();



document.getElementById("info").innerHTML=

url+"<br><br>"+time+
"<br><br>⏳ Pending";



let orders=

JSON.parse(localStorage.getItem(STORAGE_KEY))||[];




orders.push({

url:url,

time:time,

status:"Pending"

});




localStorage.setItem(

STORAGE_KEY,

JSON.stringify(orders)

);



showOrders();

updateStats();



btn.disabled=false;


}


},40);


}






function showOrders(){


let box=document.getElementById("orders");


let orders=

JSON.parse(localStorage.getItem(STORAGE_KEY))||[];




if(orders.length==0){

box.innerHTML=

"No orders yet 🚀";

return;

}




box.innerHTML="";



orders.slice().reverse().forEach((o,i)=>{


box.innerHTML+=`

<div class="order-card">


<div class="order-number">

Order #${orders.length-i}

</div>


<br>


<b>Video URL:</b>

<div class="url-text">

${o.url}

</div>


<br>


<b>Time:</b>

<br>

${o.time}


<br><br>


<div class="status">

⏳ ${o.status}

</div>


</div>

`;



});

}



function updateStats(){


let orders=

JSON.parse(localStorage.getItem(STORAGE_KEY))||[];



document.getElementById("totalOrders")
.innerHTML=orders.length;



document.getElementById("pendingOrders")
.innerHTML=

orders.filter(
x=>x.status=="Pending"
).length;


}
