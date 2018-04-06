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

  $('#delete-and-raise').click(function(){
    let sel = $('#' + $('.selected').attr('id'));
    let pos = sel.offset();
    let subTree = sel.detach();
    $('#' + sel.attr('line-target')).remove();
    subTree.appendTo('body');
    sel.css({
      'top' : pos.top,
      'left' : pos.left
    });
    calc_all_lines('#' + sel.attr('id'));
  });

  $('#swap-theme').click(function(){
    let isAcademic = false;
    $('body').toggleClass('academic-theme');
    $('body').children('.node').each(function() {
      calc_all_lines('#' + $(this).attr('id'));
    });
    isAcademic = $('body').hasClass('academic-theme');
    if (isAcademic) {
      console.log(wasPresentationMode + '--1');
      if (wasPresentationMode) {
        console.log(wasPresentationMode + '--2');
        $('body').addClass('presentation-mode')
        console.log(wasPresentationMode + '--3');
      }
    } else {
      $('body').removeClass('presentation-mode')
    }
  });

  let wasPresentationMode = false;
  $('#toggle-presentation-mode').click(function(){
    $('body').toggleClass('presentation-mode');
    wasPresentationMode = $('body').hasClass('presentation-mode');
  });
});
