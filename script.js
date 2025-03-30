const display = document.querySelector("#input");
const button = document.querySelectorAll(".button");

button.forEach((button)=>{
    button.addEventListener("click",()=>{
        const value = button.getAttribute("data-type");
       
       if(value == "c"){
        display.value = "";
       }else if(value == "="){
        try {
            display.value = eval(display.value)
        
        }catch{
            alert("invalid expression");
        }
       }else{
        display.value += value;
       }
        });


});