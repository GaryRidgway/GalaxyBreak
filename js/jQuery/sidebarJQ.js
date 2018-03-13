$(document).ready(function(){
  $('#sidebar-toggle-wrapper').click(function(){
    $('#sidebar-toggle').toggleClass('open');
    $('#sidebar').toggleClass('open');
    $(this).toggleClass('open');
  });

  $('#delete').click(function(){
    let sel = $('.selected');
    $('#' + sel.attr('line-target')).remove();
    sel.find('.node').each(function() {
      // Remove the linking lines.
      let attr = $(this).attr('line-target');
      if (typeof attr !== typeof undefined && attr !== false) {
        $('#' + attr).remove();
      }
    });
    sel.remove();
    targets = ['body'];

  });
});
