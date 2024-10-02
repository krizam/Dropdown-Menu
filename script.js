let ddmenu = document.getElementById("ddmenu");
let ddbtn = document.getElementById("ddbtn");
ddbtn.style.display = "none";

let dropShow = ()=>{
    if(ddbtn.style.display == "none"){
        ddbtn.style.display = "block";
    }
    else{
        ddbtn.style.display = "none";

    }
}
ddmenu.addEventListener("click",dropShow)



