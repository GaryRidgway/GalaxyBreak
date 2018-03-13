$(document).ready( function() {
  var nws = $('#node-workspace');
  nws.click(function(e) {
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
