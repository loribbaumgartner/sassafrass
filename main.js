// $("body").click(function() {
//   var drop = $('.container').clone();
//   $('.container').remove();
//   $('body').append(drop);
// });
$(function() {
  time = new Date().toLocaleTimeString();

  $('.current-time').append(time);

  $("html").click(function() {
    newTime = new Date().toLocaleTimeString();
    $('.current-time').text(newTime);
  });
});
