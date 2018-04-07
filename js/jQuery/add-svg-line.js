/*
 * Add an svg template for a line mapped
 * to a child node.
 *
 * Takes a string to be turned in to a jQuery selector.
 */

function add_svg_line(node) {
  let parent = $(node);
  let nodeNum = node.replace('#node-','');

  parent.attr('line-target', 'svg-line-' + nodeNum);
  $('#node-workspace').append(''.concat(
    "<svg id='svg-line-",nodeNum,"' class='line'>\
      <line id='line-",nodeNum," 'stroke-linecap='round'></line>\
    </svg>"
  ));
}
