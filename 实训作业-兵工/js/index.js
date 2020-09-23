$(function() {
  $('.flexslider').flexslider({
    animation: "fade",
    controlNav: false,
  });
  // $('.btn1').on('click',function(e) {
  //   console.log(e.)
  // })
  let index;
  $('.btn1').children().on('mouseenter',function() {
    $('.item:eq('+ index +')').hide();
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
     index = $(this).index();
    $('.item:eq(0)').hide();
    $('.item:eq('+ index +')').show();
  });
  $('.btn1').children().on('mouseleave',function() {
    index = $(this).index();
    $('.item:eq(0)').show()
    $('.item:eq('+ index +')').hide()
  })
  $('.btn1').on('mouseleave',function() {
    $('.item:eq(0)').hide()
    $('.item:eq('+ index +')').show()
  })
})