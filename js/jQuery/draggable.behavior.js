function dragElement(elmnt) {

  let JQE = $('#' + elmnt.id);
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  let nodeSize = $(':root').css('--node-size').replace(/[^-\d\.]/g, '');
  if (document.getElementById(elmnt.id)) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  JQE.attr({
      y : currentMousePos.y,
      x : currentMousePos.x
    });


  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    // Map attributes for usage in computations.
    JQE.attr({
        y : JQE.offset().top + nodeSize/2,
        x : JQE.offset().left + nodeSize/2
      });

    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

    let attr = JQE.attr('line-target');
    if (typeof attr !== typeof undefined && attr !== false) {
      div_lines(
        '#'+ JQE.parent().attr('id'),
        '#' + JQE.attr('id'),
        '#' + JQE.attr('line-target')
      );
    }

    // Look at all the node's children and update them.
    let nChildren = JQE.find('.node');
    nChildren.each(function() {
      // Update the child's position.
      console.log([$(this).offset().top, $(this).offset().left]);
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

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
