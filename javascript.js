let icon=document.getElementById("icon");
let datePart=document.getElementById("input");
var check=false;

icon.addEventListener("click",function(){
    console.log("hello");
    if(check){
     datePart.classList.add("hide");
    
    }
    else{
    datePart.classList.remove("hide");
    }
    console.log(check);
    check=!check;
});