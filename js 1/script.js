// Active navbar
document.querySelectorAll(".nav-link").forEach(link=>{
if(link.href === window.location.href){
link.classList.add("active");
}
});
// Scroll navbar shadow
window.addEventListener("scroll",()=>{
let nav=document.querySelector(".navbar");
nav.style.boxShadow = window.scrollY>50 ? "0 5px 20px rgba(0,0,0,0.5)" : "none";
});