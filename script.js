      
function showLesson(num) {
    fetch("Lesson" + num + ".js")  // path to your JS file
        .then(response => response.text())
        .then(code => {
        document.getElementById("code-content").textContent = code;
    });
}

function openNav() {
    document.getElementById("sidenav").style.width = "300px";
    document.getElementById("content").style.marginLeft = "300px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("content").style.marginLeft= "0";
}

// Toggle dropdown menus
document.querySelectorAll(".dropdown-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      this.classList.toggle("active");
      let dropdown = this.nextElementSibling;
      if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
        this.innerHTML = this.innerHTML.replace("▲", "▼");
      } else {
        dropdown.style.display = "block";
        this.innerHTML = this.innerHTML.replace("▼", "▲");
      }
    });
  }); 
