// Track the Mouse.
var targets = ['body'];
var currentMousePos = { x: -1, y: -1 };
var selectedNodes = [];
$(document).mousemove(function(event) {
  currentMousePos.x = event.pageX;
  currentMousePos.y = event.pageY;
});
