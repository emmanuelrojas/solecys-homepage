ScrollOut();

ScrollOut({
  threshold: 1,
  once: true
});

document.addEventListener("DOMContentLoaded", (event) => {
  let navbar = document.querySelector('#navbar');

  document.addEventListener("scroll", (event) => {
    if(document.documentElement.scrollTop > 200 || document.scrollingElement.scrollTop > 200) {
      navbar.setAttribute("class","blue-grey darken-4 solid");
    }
    else {
      navbar.setAttribute("class","transparent z-depth-0");
    }
  });


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, options);
  });


})

