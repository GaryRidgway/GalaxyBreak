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
    $(cNode).data( "draggable", new dragElement(document.getElementById('node-'.concat(NID))));
    // console.log($(cNode).data( "draggable"));

  }

  // THIS SHOULD ALWAYS BE LAST.
  NID ++;
}
