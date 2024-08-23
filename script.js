let container = document.querySelector("#container");

for (let i = 1; i <= 16; i++) {
 for (let j = 1; j <= 16; j++){ 
     
     let element = document.createElement("div");
     element.classList.add("divContainer");
     
     container.appendChild(element); 
     element.addEventListener("mouseover", () => {
       element.style.backgroundColor = "black";
     });
     
 }
 
 
}

