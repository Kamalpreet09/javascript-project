// FILTER FUNCTION
let buttons = document.querySelectorAll(".filter-btn");
let items = document.querySelectorAll(".gallery-item");

buttons.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    let filter = btn.getAttribute("data-filter");

    items.forEach(item=>{
      if(filter === "all" || item.classList.contains(filter)){
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// LIGHTBOX
let images = document.querySelectorAll(".gallery-item img");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

images.forEach(img=>{
  img.addEventListener("click", ()=>{
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

function closeLightbox(){
  lightbox.style.display = "none";
}