const tabsBox = document.querySelector(".tabs-box");
arrowIcons = document.querySelectorAll(".icon i");

let isDragging = false;

arrowIcons.forEach(icon => {
   icon.addEventListener("click", () => {
      tabsBox.scrollLeft += icon.id === "left" ? -450 : 450;
   })
});

const dragging = (e) => {
    if(!isDragging) return;
    tabsBox.classList.add("dragging");
      tabsBox.scrollLeft -= e.movementX;
}

const dragStop = () => {
    tabsBox.classList.remove("dragging");
    isDragging = false;
}

tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);


let prof = document.getElementById("prof");
let po = document.getElementById("po");
let home = document.getElementById("home");
let ho = document.getElementById("ho");
let id = document.getElementById("id");
let sea= document.getElementById("sea");
po.onclick = function(){
   prof.style.display = "block";
   home.style.display =" none";
   explore.style.display = "none";
   reels.style.display = "none";
}
ho.onclick = function(){
   home.style.display = "block";
   prof.style.display = "none";
   home.style.display = "flex";
   explore.style.display = "none";
   messenger.style.display="none";

}

sea.onclick= function(){
   id.style.display="block";
   messenger.style.display="none";

}
sea.ondblclick= function(){
   id.style.display="none";
}


let img = document.getElementById("imagei");
let hos = document.getElementById("house");
let faf = document.getElementById("faf");
let faf1 = document.getElementById("faf1");

img.onclick= function(){
   prof.style.display = "block";
   home.style.display = "none";
   faf.style.display = "none";
   faf1.style.display = "block"; 
   notif.style.display ="none"

}
hos.addEventListener('click', () =>{
   home.style.display = "block";
   prof.style.display = "none";
   faf1.style.display = "none"; 
   faf.style.display = "block";
   notif.style.display ="none"
})



let ore = document.getElementById("ore");
let explore = document.getElementById("explore");

ore.addEventListener('click', () =>{
   explore.style.display = "block";
   home.style.display = "none";
   prof.style.display = "none";
   reels.style.display = "none";   
   messenger.style.display="none";

})



let notif = document.getElementById("notif");
let licat = document.getElementById("licat");

licat.onclick= function(){
   notif.style.display="block";
   messenger.style.display="none";

}
licat.ondblclick= function(){
   notif.style.display="none";
}

let msg = document.getElementById("msg");
let messenger = document.getElementById("messenger");

msg.onclick= function(){
   messenger.style.display="block";
   explore.style.display = "none";
   home.style.display = "none";
   prof.style.display = "none";
   reels.style.display = "none";}
msg.ondblclick= function(){
   messenger.style.display="none";
   explore.style.display = "none";
    prof.style.display = "none";
   reels.style.display = "none";
   home.style.display = "flex";
}





let tp = document.getElementById("tp");
let reels = document.getElementById("reels");


tp.onclick=function(){
   reels.style.display = "block";
   home.style.display = "none";
   prof.style.display = "none";
   explore.style.display = "none";
}

 let mod = document.getElementById("mod");
 let more = document.getElementById("more");

 mod.onclick =function(){
   more.style.display = "block";
 }
mod.ondblclick =function(){
   more.style.display = "none";

}


 let heart = document.getElementById("heart");

heart.addEventListener('click', ()=>{
   notif.style.display = "block";
   home.style.display = "none";
   faf.style.display ="none";
   prof.style.display = "none";
   faf1.style.display ="none";
})

 

