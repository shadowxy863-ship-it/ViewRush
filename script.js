function start(){


let url =
document.getElementById("url").value;



if(url==""){

document.getElementById("status")
.innerHTML="⚠️ Enter YouTube URL";

return;

}



document.getElementById("status")
.innerHTML=
"✅ Request submitted successfully";



document.getElementById("pending")
.style.display="block";



}
