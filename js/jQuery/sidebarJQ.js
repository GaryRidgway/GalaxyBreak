$(document).ready(function(){
  $('#sidebar-toggle').click(function(){
    $(this).toggleClass('open');
    $('#sidebar').toggleClass('open');
    $('#sidebar-toggle-wrapper').toggleClass('open');
  });
});
