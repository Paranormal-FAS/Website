
//Navigations menü oben links
function openNav() {
  
    document.getElementById("id-side-nav").style.width = "250px";
    document.getElementById("id-main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("id-side-nav").style.width = "0";
    document.getElementById("id-main").style.marginLeft= "0";
    document.body.style.backgroundColor = "lightgray";
  }
  var mode = document.getElementById('id-menu-nav')

  window.onclick = function(event) {
    if (event.target == mode) {
      mode.style.display = "none";
    }
  }

//log in oben rechts
var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}