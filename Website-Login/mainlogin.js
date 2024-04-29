const showpass = document.getElementById("show-pass");
const inputPass = document.getElementById("user");
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
const showrepass = document.getElementById("show-repass");
const inputrePass = document.getElementById("repassword");
showrepass.addEventListener("click",function(){
if (showrepass.className=="mdieyeoff"){
showrepass.classList.replace("mdieyeoff","mdieye");
}else{
showrepass.classList.replace("mdieye","mdieyeoff");
}
if (inputrePass.type =="password"){
    inputrePass.type = "text";
}else{
inputrePass.type = "password"
}
})

   