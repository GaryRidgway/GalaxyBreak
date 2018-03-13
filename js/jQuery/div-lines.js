
/*
 * Create an SVG line between two divs.
 * linesvg2 is the child of div2,
 * and div2 is the child of div1.
 *
 * You must pass the string id's that
 * will be used to create jQuery selectors.
 */

function div_lines(div1, div2, line2) {
  let nodeSize = $(':root').css('--node-size').replace(/[^-\d\.]/g, '');
  let odiv1 = $(div1);
  let odiv2 = $(div2);
  let svg = $(line2);
  let line = $(line2).find('line');

  let pos1 = odiv1.offset();
  let pos2 = odiv2.offset();

  let svgHeight = pos1.top-pos2.top;
  let svgWidth = pos1.left-pos2.left;
  let absSvgHeight = Math.abs(svgHeight);
  let absSvgWidth = Math.abs(svgWidth);

  // Set the proper placement for the svg canvas.
  svg.css({
    'height' : absSvgHeight,
    'width' : absSvgWidth
  });
  if (svgHeight < 0) {
    svg.css({'top' : pos1.top + nodeSize/2});
  } else {
    svg.css({'top' : pos2.top + nodeSize/2});
  }
  if (svgWidth < 0) {
    svg.css({'left' : pos1.left + nodeSize/2});
  } else {
    svg.css({'left' : pos2.left + nodeSize/2});
  }

  // Set the proper placement for the line.
  if ((svgWidth > 0 && svgHeight > 0) || (svgWidth < 0 && svgHeight < 0)) {
    line
      .attr('y1', 0)
      .attr('x1', 0)
      .attr('y2', absSvgHeight)
      .attr('x2', absSvgWidth);
  } else {
    line
      .attr('y1', 0)
      .attr('x1', absSvgWidth)
      .attr('y2', absSvgHeight)
      .attr('x2', 0);
  }
}
