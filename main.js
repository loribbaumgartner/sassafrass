// $("body").click(function() {
//   var drop = $('.container').clone();
//   $('.container').remove();
//   $('body').append(drop);
// });
$(function() {
  time = new Date().toLocaleTimeString();

  $('.current-time').append(time);

  $("html").click(function(time) {
    $('.current-time').append(time);
  });
});
