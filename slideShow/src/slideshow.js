
let current = 0;

function showSlide(n) {
  const slide = document.querySelectorAll('.pic');
  
  for (let i=0; i < slide.length; i++) {
    slide[i].style.display = 'none';
  }

    slide[n].style.display = 'block';
    
}

function prevShow() {
  const slide = document.querySelectorAll('.pic');

  if(current > 0) {
    current -= 1;
  }
  else {
    current = slide.length-1;
  }
  showSlide(current);  
}

function nextShow() {
  const slide = document.querySelectorAll('.pic');
  
  if(current < slide.length-1) {
    current += 1;
  }
  else if(current === slide.length-1) {
    current = 0;
  }
  showSlide(current);  
}

