// $("body").click(function() {
//   var drop = $('.container').clone();
//   $('.container').remove();
//   $('body').append(drop);
// });
$(function() {
  time = new Date().toLocaleTimeString();

  $('.current-time').append(time);

  $('html').click(function() {
    newTime = new Date().toLocaleTimeString();
    var droplets = $('.droplets').clone();
    $('.droplets').remove();
    $('.current-time').text(newTime);
    $('html').append(droplets);
  });
});
