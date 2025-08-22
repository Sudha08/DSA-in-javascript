import './Lesson1.js';
import './Lesson2.js';
import './Lesson3.js';
import './Lesson4.js';


showLesson('1');
      
function showLesson(num) {
    fetch("Lesson" + num + ".js")  // path to your JS file
        .then(response => response.text())
        .then(code => {
        document.getElementById("code-content").textContent = code;
    });
}

function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("content").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("content").style.marginLeft= "0";

}
