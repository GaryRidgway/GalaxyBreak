var NID = 0;
function addNode(parents) {
  if(parents.length == 1) {

    // Make the node.
    $(parents[0]).append(''.concat(
      "<div id = 'node-",NID,"' class = 'node'>\
      </div>"
    ));

    let cNode = $('#node-'.concat(NID))
    let nodeSize = $(':root').css('--node-size').replace(/[^-\d\.]/g, '');
    if(cNode.parent().hasClass('node')) {
      // console.log(cNode.parent().attr('id'));
      // console.log(['mouse pos', 'parent pos', ' offset']);
      // console.log([currentMousePos.x, cNode.parent().attr('x'), currentMousePos.x - cNode.parent().attr('x')]);
      // console.log([currentMousePos.y, cNode.parent().attr('y'), currentMousePos.y - cNode.parent().attr('y')]);
      cNode.css({
        // Position it on the mouse.
        'left':''.concat(currentMousePos.x - cNode.parent().attr('x')),
        'top':''.concat(currentMousePos.y - cNode.parent().attr('y'))
      });

      add_svg_line('#' + cNode.attr('id'));
      div_lines(
        '#'+ cNode.parent().attr('id'),
        '#' + cNode.attr('id'),
        '#' + cNode.attr('line-target')
      );
    } else {
      cNode.css({
        // Position it on the mouse.
        'left':''.concat(currentMousePos.x-nodeSize/2),
        'top':''.concat(currentMousePos.y-nodeSize/2)
      });
    }
    cNode.mousedown(function(e){
      e.stopPropagation();
      selectNode(cNode);
    });

    // Allow it to be draggable.
    dragElement(document.getElementById('node-'.concat(NID)));

  }

  // THIS SHOULD ALWAYS BE LAST.
  NID ++;
}
