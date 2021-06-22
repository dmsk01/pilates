let wrapper = document.querySelector('.wrapper');

let pageSlider = new Swiper('.page',{
  wrapperClass:'page__wrapper',

  slideClass:'page__screen',

  direction:'vertical',

  slidesPerView:'auto',

  parallax:true,

  keyboard:{
    enabled:true,
    onlyInViewport:true,
    pageUpDown:true,
  },

  mousewheel:{
    sensitivity:2,
  },

  watchOverflow: true,

  speed:500,

  observer:true,
  observerParents:true,
  observerSlideChildren:true,

  pagination:{
    el:'.page__pagination',
    type:'bullets',
    clickable:true,
    bulletClass:'page__bullet',
    bulletActiveClass:'page__bullet_active',
  },

  scrollbar:{
    el:'.page__scroll',
    dragClass:'page__drag-scroll',
    draggable:true,
  },

  init:false,

  on:{
    init:function(){
      menuSlider();
      setScrollType();
      wrapper.classList.add('_loaded');
    },
    slideChange:function(){
      setSlidersCounter();
      menuSliderRemoveActive();
      menuLinks[pageSlider.realIndex].classList.add('_active');
    },
    resize:function() {
      setScrollType();
    }
  }
});

let menuLinks = document.querySelectorAll('.menu__link');

function setSlidersCounter() {
  const sliderCounter = document.querySelector('.page__slidesCounter');

  sliderCounter.innerHTML = `0${pageSlider.realIndex + 1}`;
}
// Adding active class function and event listener adding

function menuSlider(){
  if(menuLinks > 0){
    menuLinks[pageSlider.realIndex].classList.add('_active');
    for(let i = 0; i < menuLinks.length; i++ ){
      const menuLink = menuLinks[i];
      menuLink.addEventListener('click', function(event){
        event.preventDefault;
        menuSliderRemoveActive
        pageSlider.slideTo(index,800);
        menuLink.classList.add('._active');
      })
    }
  }
}

// Removing active class from menu link function

function menuSliderRemoveActive(){
  let menuLinkActive = document.querySelector('.menu__link._active');
  if(menuLinkActive){
    menuLinkActive.classList.remove('_active');
  }
}

// Func to toggle free mode (scroll type) on window resize, depends on content height

function setScrollType(){
  if(wrapper.classList.contains('_free')){
    wrapper.classList.remove('_free');
    pageSlider.params.freeMode = false;
  }

  for(let i = 0; i < pageSlider.slides.length; i++){
    const pageSlide = pageSlider.slides[i];
    const pageSlideContent = pageSlide.querySelector('.screen__content');

    if(pageSlideContent){
      const pageSlideContentHeight = pageSlideContent.offsetHeigt;
      if(pageSlideContentHeight > window.innerHeight){
        wrapper.classList.add('_free');
        pageSlider.params.freeMode = true;
        break;
      }
    }
  }
}


pageSlider.init();