function calc_all_lines(id) {
  // Look at all the node's children and update them.
  JQE = $(id);
  let nChildren = JQE.find('.node');
  nChildren.each(function() {
    // Update the child's position.
    $(this).attr({
      y : $(this).offset().top,
      x : $(this).offset().left
    });

    // Update the child's line.
    let attr = $(this).attr('line-target');
    if (typeof attr !== typeof undefined && attr !== false) {
      div_lines(
        '#'+ $(this).parent().attr('id'),
        '#' + $(this).attr('id'),
        '#' + $(this).attr('line-target')
      );
    }
  });
}
