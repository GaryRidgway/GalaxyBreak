$(document).ready(function(){
  $('#sidebar-toggle-wrapper').click(function(){
    $('#sidebar-toggle').toggleClass('open');
    $('#sidebar').toggleClass('open');
    $(this).toggleClass('open');
  });
});
