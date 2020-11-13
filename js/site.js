M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

window.onscroll = function() {myFunction()};
  var header = document.getElementById("main-nav");
  var sticky = 500;
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      header.classList.add("nav-bg-switch");
    } else {
      header.classList.remove("nav-bg-switch");
    }
}


