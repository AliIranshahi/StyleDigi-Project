$(document).ready(function () {
  var selector = $(this).attr('data-filter');
  console.log(",,,");
  $('.portfolio-item').isotope({
    filter: selector
  })
$('.portfolio-item').isotope(function () {
  itemSelector: '.item'
});



$('.portfolio-menu ul li').click(function () {
  $('.portfolio-menu ul li').removeClass('active');
  $(this).addClass('active');


  var selector = $(this).attr('data-filter');
  console.log(",,,");

  $('.portfolio-item').isotope({
    filter: selector
  })
  return false;
});
});