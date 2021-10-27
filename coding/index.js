$(document).ready(function () {

  $(".main>.slide").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    Infinite: true,
    pauseOnHover: true,
    arrows: true
  });
});

//Up Button
$(document).ready(function () {
  $(".bottomMenue>.topBtn>.btn>.fas").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.bottomMenue>.topBtn>.btn>.fas').fadeIn();
    } else {
      $('.bottomMenue>.topBtn>.btn>.fas').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('.bottomMenue>.topBtn>.btn>.fas').click(function () {
    $('.bottomMenue>.topBtn>.btn>.fas').tooltip('hide');
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  $('.bottomMenue>.topBtn>.btn>.fas').tooltip('show');

});


$(document).ready(function () {
  $(".menue-box").slick({
    slide: "div", //슬라이드 되어야 할 태그 ex) div, li
    infinite: true, //무한 반복 옵션
    slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
    speed: 1000, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows: false, // 옆으로 이동하는 화살표 표시 여부
    dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay: false, // 자동 스크롤 사용 여부
    autoplaySpeed: 1000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    vertical: false, // 세로 방향 슬라이드 옵션
    prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정"<button type='button' class='slick-prev'>Previous</button>"
    nextArrow: "<button type='button' class='slick-next'>Next</button>", // 다음 화살표 모양 설정"<button type='button' class='slick-next'>Next</button>"
    dotsClass: "slick-dots", //아래 나오는 페이지네이션(점) css class 지정
    draggable: true, //드래그 가능 여부

    customPaging: function(slider, i) {
      var target_txt = $(slider.$slides[i]).attr('data-nav-txt');
      console.log(slider.$slides);      
      var thumb = "<span>"+ target_txt + "</span>";
      return thumb;
    }
    
    
  });
});
