window.addEventListener('load',slideshowSetup);

function slideshowSetup() {
  document.getElementById('slideshow-next').addEventListener('click',slideshowNext);
}


function slideshowNext(){
  let slides = document.getElementsByClassName('slide');
  slides[0].classlist.remove('visible');
  slides[1].classlist.add('visible');
}
