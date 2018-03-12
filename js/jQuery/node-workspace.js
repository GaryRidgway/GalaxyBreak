$(document).ready( function() {
  var nws = $('#node-workspace');
  nws.click(function() {
    addNode(targets);
  });
});

// Track the Mouse.
var targets = ['body'];
var currentMousePos = { x: -1, y: -1 };
var selectedNodes = [];
$(document).mousemove(function(event) {
  currentMousePos.x = event.pageX;
  currentMousePos.y = event.pageY;
});

var NID = 0;
function addNode(parents) {
  if(parents.length == 1) {
    // Make the node.
    $(parents[0]).append(''.concat(
      "<div id = 'node-",NID,"' class = 'node'>\
      </div>"
    ));
    let cNode = $('#node-'.concat(NID))
    // Position it on the mouse.
    let nodeSize = $(':root').css('--node-size').replace(/[^-\d\.]/g, '');
    cNode.css({

      'left':''.concat(currentMousePos.x-nodeSize/2),
      'top':''.concat(currentMousePos.y-nodeSize/2)
    });

    cNode.mousedown(function(){
      selectNode(cNode);
    });

    // Allow it to be draggable.
    dragElement(document.getElementById('node-'.concat(NID)));
  }

  // THIS SHOULD ALWAYS BE LAST.
  NID ++;
}


// This may have to be updated later to improve functionality,
// specifically for multinode selections.
function selectNode(target) {
  // Specifically theis block might be a problem.
  $('.node').each(function() {
    $(this).removeClass('selected');
  });
  //
  target.addClass('selected');
  selectedNodes = [];
  targets = [];
  $('.selected').each(function() {
    selectedNodes.push($(this).attr('id'));
    targets.push('#' + $(this).attr('id'));
  });

}
