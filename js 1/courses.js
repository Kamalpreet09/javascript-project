let courses = [
  {name:"B.Tech", duration:"4 Years", desc:"Engineering and Technology"},
  {name:"MBA", duration:"2 Years", desc:"Business Administration"},
  {name:"BCA", duration:"3 Years", desc:"Computer Applications"},
  {name:"MCA", duration:"2 Years", desc:"Advanced Computing"},
  {name:"AI & Data Science", duration:"4 Years", desc:"Future Tech"},
  {name:"Cyber Security", duration:"3 Years", desc:"Security Systems"}
];

let list = document.getElementById("list");
let searchBox = document.getElementById("search");

// CREATE SUGGESTION BOX
let suggestionBox = document.createElement("div");
suggestionBox.style.position = "absolute";
suggestionBox.style.background = "#1e293b";
suggestionBox.style.width = searchBox.offsetWidth + "px";
suggestionBox.style.zIndex = "1000";
suggestionBox.style.borderRadius = "10px";
suggestionBox.style.marginTop = "5px";

searchBox.parentNode.appendChild(suggestionBox);

// DISPLAY COURSES
function displayCourses(data){
  list.innerHTML = "";

  data.forEach(c=>{
    list.innerHTML += `
    <div class="col-md-4 mb-4" data-aos="zoom-in">
      <div class="course-card">
        <h4 style="color:white;">${c.name}</h4>
        <p style="color:#cbd5e1;">${c.desc}</p>
        <small style="color:#94a3b8;">Duration: ${c.duration}</small><br>
        <button class="btn btn-info mt-2">Apply</button>
      </div>
    </div>`;
  });
}

displayCourses(courses);

// SEARCH + SUGGESTIONS
searchBox.addEventListener("input", function(){

  let val = this.value.toLowerCase();

  // FILTER COURSES
  let filtered = courses.filter(c =>
    c.name.toLowerCase().includes(val)
  );

  displayCourses(filtered);

  // CLEAR SUGGESTIONS
  suggestionBox.innerHTML = "";

  if(val === "") return;

  // SHOW SUGGESTIONS
  filtered.forEach(c=>{
    let div = document.createElement("div");
    div.textContent = c.name;
    div.style.padding = "10px";
    div.style.cursor = "pointer";
    div.style.color = "white";

    div.onclick = () => {
      searchBox.value = c.name;
      suggestionBox.innerHTML = "";
      displayCourses([c]);
    };

    suggestionBox.appendChild(div);
  });

  // ❌ IF NOT FOUND
  if(filtered.length === 0){
    suggestionBox.innerHTML = `<div style="padding:10px;color:red;">Course not available</div>`;
  }
});