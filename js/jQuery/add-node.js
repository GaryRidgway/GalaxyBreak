var NID = 0;
function addNode(parents) {
  if(parents.length == 1) {

    // Make the node.
    $(parents[0]).append(''.concat(
      "<div id='node-",NID,"' class='node'>\
        <div class='textbox-positioner'id='textbox-positioner-",NID,"'>\
          <div id='textbox-bg-",NID,"' class='textbox-bg'></div>\
          <input type='text' class='node-input' id='node-input-",NID,"'>\
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
    // console.log($(cNode).data( "draggable"));

    // Size the text boxes.
    let cNodeTextBox = cNode.find('.textbox-positioner');
    let cNodeTextBoxInputBG = cNodeTextBox.find('#textbox-bg-'.concat(NID));
    let cNodeTextBoxInput = cNodeTextBox.find('#node-input-'.concat(NID));

    cNodeTextBoxInputBG.css('height', cNodeTextBox.height());
    cNodeTextBoxInput.css('top', '-' + (cNodeTextBox.height()/2));
    cNodeTextBoxInput.on("change paste keyup", function() {
      let cNodeTextWidth = $.fn.textWidth(cNodeTextBoxInput.val(), 'Roboto');
      cNodeTextBox.css('width', cNodeTextWidth+10);
      cNodeTextBoxInputBG.css('width', cNodeTextWidth+10);
      cNodeTextBoxInput.css('width', cNodeTextWidth+10);
      if(cNodeTextBoxInput.val() != '') {
        cNodeTextBoxInputBG.css('background-color', 'rgba(43,43,43, 0.8)');
      } else {
        cNodeTextBoxInputBG.css('background-color', 'transparent');
      }
    });
    cNodeTextBoxInput.keyup(function() {
      let cNodeTextWidth = $.fn.textWidth(cNodeTextBoxInput.val(), 'Roboto');
      cNodeTextBox.css('width', cNodeTextWidth+10);
      cNodeTextBoxInputBG.css('width', cNodeTextWidth+10);
      cNodeTextBoxInput.css('width', cNodeTextWidth+10);
    });

  }

  // THIS SHOULD ALWAYS BE LAST.
  NID ++;
}


$.fn.textWidth = function(text, font) {
  if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
  $.fn.textWidth.fakeEl.text(text || this.val() || this.text()).css('font', font || this.css('font'));
  return $.fn.textWidth.fakeEl.width();
};
