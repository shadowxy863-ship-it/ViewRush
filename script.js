let used = false; // track free trial usage

function start(){

let url = document.getElementById("url").value;
let btn = document.getElementById("btn");

if(url==""){
alert("Please enter YouTube URL");
return;
}

// prevent multiple click
btn.disabled = true;

let process = document.getElementById("processBox");
let done = document.getElementById("done");
let trial = document.getElementById("trial");

done.style.display="none";
process.style.display="block";

let count = 0;

let timer = setInterval(()=>{

count++;

document.getElementById("progress").style.width = count + "%";
document.getElementById("percent").innerHTML = count + "%";

if(count >= 100){

clearInterval(timer);

process.style.display="none";
done.style.display="block";

// order info
let now = new Date().toLocaleString();

document.getElementById("info").innerHTML =
"URL: " + url +
"<br><br>Time: " + now +
"<br><br>Status: Pending Review";

// show free trial message ONLY AFTER FIRST ORDER
if(!used){
used = true;
setTimeout(()=>{
trial.style.display = "block";
}, 1000);
}

btn.disabled = false;
}

},40);

}
