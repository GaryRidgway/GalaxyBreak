var NID = 0;
function addNode(parents) {
  if(parents.length == 1) {

    // Make the node.
    $(parents[0]).append(''.concat(
      "<div id='node-",NID,"' class='node'>\
        <div class='textbox-positioner'id='textbox-positioner-",NID,"'>\
          <div id='textbox-bg-",NID,"' class='textbox-bg'></div>\
          <textarea wrap='off' spellcheck='false' type='text' class='node-input' id='node-input-",NID,"'></textarea>\
        </div>\
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

    // Size the text boxes.
    let cNodeTextBox = cNode.find('.textbox-positioner');
    let cNodeTextBoxInputBG = cNodeTextBox.find('#textbox-bg-'.concat(NID));
    let cNodeTextBoxInput = cNodeTextBox.find('#node-input-'.concat(NID));

    cNodeTextBoxInputBG.css('height', cNodeTextBox.height());
    cNodeTextBoxInput.css('top', '-' + (cNodeTextBox.height()/2));
    cNodeTextBoxInput.css('width', 70);

    cNodeTextBoxInput.keyup(function() {
      let bWidth = Math.max(70,cNodeTextBoxInput[0].scrollWidth) + 'px';
      let bHeight = Math.max(16,cNodeTextBoxInput[0].scrollHeight) + 'px';

      cNodeTextBoxInput.css({'width':'0px', 'height':'0px'});
      cNodeTextBoxInput.css({'width':bWidth, 'height':bHeight});

      cNodeTextBoxInputBG.css({'width':'0px', 'height':'0px'});
      cNodeTextBoxInputBG.css({'width':bWidth, 'height':bHeight});

      cNodeTextBox.css({'width':'0px', 'height':'0px'});
      cNodeTextBox.css({'width':bWidth, 'height':bHeight});

      cNodeTextBoxInput.css('top', '-' + (cNodeTextBox.height()));
      calc_all_lines(cNode);
    });
  }

  // THIS SHOULD ALWAYS BE LAST.
  NID ++;
}
