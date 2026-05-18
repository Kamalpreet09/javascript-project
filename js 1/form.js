let form = document.getElementById("admissionForm");

form.addEventListener("submit", async function(e){

  e.preventDefault();

  // INPUT VALUES
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();

  // VALIDATION
  if(name.length < 3){
    alert("Enter valid name");
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

  // DATA OBJECT
  let studentData = {
    name: name,
    email: email,
    phone: phone
  };

  try{

    // API CALL
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body: JSON.stringify(studentData)
      }
    );

    let result = await response.json();

    console.log(result);

    // SUCCESS POPUP
    document.getElementById("successPopup").style.display = "flex";

    form.reset();

  }catch(error){

    alert("Something went wrong");

    console.log(error);

  }

});

// CLOSE POPUP
function closePopup(){
  document.getElementById("successPopup").style.display = "none";
}