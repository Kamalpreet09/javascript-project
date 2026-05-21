let search=document.getElementById("studentSearch");

search.addEventListener("input",()=>{

let value=search.value.toLowerCase();

let cards=document.querySelectorAll(".student-card");

cards.forEach(card=>{

let name=card.innerText.toLowerCase();

if(name.includes(value)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

});