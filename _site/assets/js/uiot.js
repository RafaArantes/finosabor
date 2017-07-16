$(function() {
  $('.salgado').on('click', function(){

  eae = $(this).attr('class').split(' ')[1];

  $('.' + eae).addClass('active');

});
  $('.overlayexit').on('click', function(){
    $(".overlay").removeClass('active');
  })
})
