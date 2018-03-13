// This may have to be updated later to improve functionality,
// specifically for multinode selections.
function selectNode(target) {
  if(target.length < 2 && $(target[0]).hasClass('selected')) {
    $(target[0]).removeClass('selected');
    // See if the elemnt is in the target list
    // and remove it if it is being deselected.
    let index = targets.indexOf('#' + $(target[0]).attr('id'));
    if (index > -1) {
      targets.splice(index, 1);
    }
    // If the target list is empty,
    // reset it to be the body.
    if (targets.length == 0) {
      targets = ['body'];
    }
  } else {
    // Specifically theis block might be a problem.
    $('.node').each(function() {
      $(this).removeClass('selected');
      targets = ['body'];
    });
    //
    selectedNodes = [];
    targets = [];
    target.each( function() {$(this).addClass('selected')});
    $('.selected').each(function() {
      selectedNodes.push($(this).attr('id'));
      targets.push('#' + $(this).attr('id'));
    });
  }
}
