let form = document.getElementById("admissionForm");

form.addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let course = document.getElementById("course").value;

  // VALIDATION
  if(name.length < 3){
    alert("Name must be at least 3 characters");
    return;
  }

  if(!email.includes("@")){
    alert("Enter valid email");
    return;
  }

  if(phone.length < 10){
    alert("Enter valid phone number");
    return;
  }

  if(course === ""){
    alert("Please select a course");
    return;
  }

  // SHOW POPUP
  document.getElementById("successPopup").style.display = "flex";

  form.reset();
});

// CLOSE POPUP
function closePopup(){
  document.getElementById("successPopup").style.display = "none";
}