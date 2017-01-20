alert('cc')
$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

r=Math.abs(wScroll/400-1);
// 400 -> 0%
// 0 ->100%


  $('.back-text').css({
    'transform' : 'translate(0px, '+ wScroll / 4 +'%)'
  });

  $('.encreur').css({
    'transform' : 'translate(0px, '+ wScroll / 2 +'%)',
    'transform' : 'scale('+r+','+ r+')'
  });

  $('.stylo').css({
    'transform' : 'translate(0px, -'+ wScroll / 6 +'%)',
    'transform' : 'scale('+r+','+ r+')'
  });

  if(wScroll>$('.pictures').offset().top - $(window).height() /1.) {
    $('.pictures img').each(function(i){
      setTimeout(function(){
        $('.pictures img').eq(i).addClass('is-showing');
      },150 * (i+1));

    })
  }


});
