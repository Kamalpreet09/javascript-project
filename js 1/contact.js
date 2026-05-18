let form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("cname").value.trim();
  let email = document.getElementById("cemail").value.trim();
  let msg = document.getElementById("message").value.trim();

  if(name.length < 3){
    alert("Enter valid name");
    return;
  }

  if(!email.includes("@")){
    alert("Enter valid email");
    return;
  }

  if(msg.length < 5){
    alert("Message too short");
    return;
  }

  document.getElementById("contactPopup").style.display = "flex";

  form.reset();
});

function closeContactPopup(){
  document.getElementById("contactPopup").style.display = "none";
}