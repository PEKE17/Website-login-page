let slideCount = 0

let nextBtn = document.getElementById('next-btn')
let prevBtn = document.getElementById('prev-btn')
let slider = document.getElementById('slider');


function moveSlide(slideNumber){
  slideCount = slideNumber
  let margin = slideNumber*100;
  slider.style.marginLeft = -margin+"%";
}

const nextImg = nextBtn.addEventListener('click', function(){
  if (slideCount < 4)
  {
    slideCount++
    slider.style.transition = '1s'; 
  }
  else
  {
    slideCount = 0
    slider.style.transition= '.2s';
  }
  moveSlide(slideCount)
})

const prevIgm = prevBtn.addEventListener('click', function(){
  if (slideCount <= 0)
  {
    slideCount = 4
    slider.style.transition = '.2s'; 
  }
  else 
  {
    slideCount--
    slider.style.transition= '1s';
  }

  moveSlide(slideCount)
})
 