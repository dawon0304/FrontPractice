$(document).ready(function(){
  $('.slide').slick({
    slide:'img',
    autoplay:true,
    Infinite: true,
    slidesToShow: 1,
    speed: 4200,
    arrows : true,
    autoplay : true,
    autoplaySpeed: 400,
    pauseOnHover: true,
    dots: true


  });
});


$(document).ready(function(){
  new Swiper(".mySwiper",{
    slidesPerView: 3,
    
    slidesPerGroup:3,
    loop:true,
    loopFillGruopWithBlank: true,
    pagination:{
      el:".swiper-pagination",
      clickable: true,
    },

  });
});
