$(document).ready( function() {
  var nws = $('#node-workspace');
  nws.click(function() {
    addNode('body');
  });
});

// Track the Mouse.
var currentMousePos = { x: -1, y: -1 };
$(document).mousemove(function(event) {
  currentMousePos.x = event.pageX;
  currentMousePos.y = event.pageY;
});

var NID = 0;
function addNode(parent) {
  // Make the node.
  $(parent).append(''.concat(
    "<div id = 'node-",NID,"' class = 'node'>\
    </div>"
  ));
  let cNode = $('#node-'.concat(NID))
  // Position it on the mouse.
  cNode.css({
    'left':''.concat(currentMousePos.x-5),
    'top':''.concat(currentMousePos.y-5)
  });

  cNode.click(function(){
    cNode.toggleClass('selected');
  });


  NID ++;
}
