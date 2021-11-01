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
  var menu = ['이달의 컬러', '신상품', '컬렉션']
  var mySwiper = new Swiper(".mySwiper",{
    slidesPerView: 4,
    slidesPerGroup: 4,
    loop:true,
    loopFillGruopWithBlank: true,
    pagination: {
      el:".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
      },
  },
    spaceBetween : 20,



  });
});
