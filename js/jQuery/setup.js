$(document).ready( function() {
  // Scroll to center of page horizontally.
  window.scrollTo(
    $(document).width()/2,
    0
 );

  $(function(){
      $("#includes").load("includes.html");
    });
});
