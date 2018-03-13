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
