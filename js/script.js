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

  init:false,

  on:{
    init:function(){
      menuSlider();
      wrapper.classList.add('_loaded');
    },
    slideChange:function(){
      menuSliderRemoveActive();
      menuLinks[pageSlider.realIndex].classList.add('._active');
    }
  }
});

let menuLinks = document.querySelectorAll('.menu__link');


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

pageSlider.init();