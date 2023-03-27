const input=document.querySelector(".input");
const body=document.querySelector("body");
 input.checked= JSON.parse(localStorage.getItem("mode"));

 update()

function update(){
    if(input.checked){
        body.style.background="black";
    }
   else {
    body.style.background="white";

    }
}

input.addEventListener("input",function(){
    update();
    updateLocalSt();
})


function updateLocalSt(){
    localStorage.setItem("mode",JSON.stringify(input.checked))
}