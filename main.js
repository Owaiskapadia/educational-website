let Navigation=document.querySelector(".Navigation")
// window.onscroll(myFunction);
 function myFunction(){
    if(window.scrollY>0){

        Navigation.style.backgroundColor= "#424890"
        
    }
    else{
        Navigation.style.backgroundColor= "transparent"
        
    }
}

let faq=document.querySelectorAll(".faq")


faq.forEach(faq => {
    faq.addEventListener("click", ()=>{
        faq.classList.toggle("open");
// for changing the plus icon to minus
        let icon=faq.querySelector(".faq__icon i")
        if(icon.className==="uil uil-plus"){
            icon.className= "uil uil-minus"
        }else{
            icon.className="uil uil-plus"
        }
    })
});

let menu=document.querySelector("#open-menu-btn")
let navMenu=document.querySelector(".nav__menu")
let close=document.querySelector("#close-menu-btn")

    menu.addEventListener("click",()=>{
        navMenu.style.display="flex"
        menu.style.display="none"
        close.style.display="inline-block"
})


close.addEventListener("click",()=>{
        navMenu.style.display="none"
        menu.style.display="inline-block"
        close.style.display="none"
})







let x;
console.log(x)

let array=["a", "a", "b", "a", "b", "c"]

for(let i=0; i<array.length; i++){
    for(let j=1; j<array.length-1;j++){
        if(array[i]==array[j]){
            array.splice(j,1)
        }
    }
}
console.log(array)