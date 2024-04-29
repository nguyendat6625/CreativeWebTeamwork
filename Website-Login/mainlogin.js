const showpass = document.getElementById("show-pass");
const inputPass = document.getElementById("pass");
showpass.addEventListener("click",function(){
if (showpass.className=="mdieyeoff"){
showpass.classList.replace("mdieyeoff","mdieye");
}else{
showpass.classList.replace("mdieye","mdieyeoff");
}
if (inputPass.type =="password"){
    inputPass.type = "text";
}else{
inputPass.type = "password"
}
})

   