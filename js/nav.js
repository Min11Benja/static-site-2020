// Slide Down a Bar - When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-desktop").style.top = "0";
    document.getElementById("default-desktop").style.top = "-50px";
  } else {
    document.getElementById("scroll-desktop").style.top = "-50px";
    document.getElementById("default-desktop").style.top = "0px";
  }
}
