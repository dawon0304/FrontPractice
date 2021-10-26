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