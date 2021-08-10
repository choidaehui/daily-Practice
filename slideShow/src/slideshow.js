
const slide = document.querySelectorAll('#pic');
console.log(slide);
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
let current = 0;

showSlide(current);

function showSlide(n) {

  for (let i=0; i < slide.length; i++) {
  slide[i].style.display = 'none';
  }

  slide[n].style.display = 'block';
  console.log(slide);
}

function prevShow() {

  if(current > 0) {
    current -= 1;
  }
  else {
    current = slide.length-1;
  }
  showSlide(current);  
}

function nextShow() {

  if(current < slide.length) {
    current += 1;
  }
  else {
    current = 0;
  }
  showSlide(current);  
}

