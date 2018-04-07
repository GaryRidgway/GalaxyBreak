$(document).ready( function() {
  // Scroll to center of page horizontally.
  $(window).on('beforeunload', function() {
    $(window).scrollLeft(
      ($(document).width() - $(window).width())/2
    );
  });
});
