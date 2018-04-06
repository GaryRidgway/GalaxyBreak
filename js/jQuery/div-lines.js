
/*
 * Create an SVG line between two divs.
 * line2 is the child of div2,
 * and div2 is the child of div1.
 *
 * You must pass the string id's that
 * will be used to create jQuery selectors.
 */

function div_lines(div1, div2, line2) {
  // this should be set to 10 if academic style is on.
  var w1 = 10;
  var w2 =2 * w1;
  if (
      div1.replace('#','') !== 'undefined' &&
      div2.replace('#','') !== 'undefined' &&
      line2.replace('#','') !== 'undefined'
  ) {
    let nodeSize = $(':root').css('--node-size').replace(/[^-\d\.]/g, '');
    let odiv1 = $(div1);
    let odiv2 = $(div2);
    let svg = $(line2);
    let line = $(line2).find('line');
    var topCircle = $('#line-circle-top-' + line2.split("-").pop());
    topCircle.attr('r', 0.1);
    var bottomCircle = $('#line-circle-bottom-' + line2.split("-").pop());
    bottomCircle.attr('r', 0.1);

    let pos1 = odiv1.offset();
    let pos2 = odiv2.offset();

    let svgHeight = pos1.top-pos2.top;
    let svgWidth = pos1.left-pos2.left;
    let absSvgHeight = Math.abs(svgHeight) + 40 - w2;
    let absSvgWidth = Math.abs(svgWidth) + 40;

    // Set the proper placement for the svg canvas.
    svg.css({
      'height' : absSvgHeight,
      'width' : absSvgWidth
    });
    if (svgHeight < 0) {
      svg.css({'top' : pos1.top - 20 + w1 + nodeSize/2});
    } else {
      svg.css({'top' : pos2.top - 20 + w1 + nodeSize/2});
    }
    if (svgWidth < 0) {
      svg.css({'left' : pos1.left - 20 + nodeSize/2});
    } else {
      svg.css({'left' : pos2.left - 20 + nodeSize/2});
    }

    // Set the proper placement for the line.
    if ((svgWidth > 0 && svgHeight > 0) || (svgWidth < 0 && svgHeight < 0)) {
      line
        .attr('y1', 20)
        .attr('x1', 20)
        .attr('y2', absSvgHeight - 20)
        .attr('x2', absSvgWidth - 20);
      topCircle
        .attr('cy', 20)
        .attr('cx', 20);
      bottomCircle
        .attr('cy', absSvgHeight - 20)
        .attr('cx', absSvgWidth - 20);
    } else {
      line
        .attr('y1', 20)
        .attr('x1', absSvgWidth - 20)
        .attr('y2', absSvgHeight - 20)
        .attr('x2', 20);
      topCircle
        .attr('cy', 20)
        .attr('cx', absSvgWidth - 20)
      bottomCircle
        .attr('cy', absSvgHeight - 20)
        .attr('cx', 20);
    }
  }
}
