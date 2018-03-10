var treeNodes = [];

function setup() {
  var canvas = createCanvas(2500, 2000);
  canvas.parent('#canvas-container');
  background('#3c3c3c');
}

function draw() {

}

function mouseClicked() {
  treeNodes.push(new treeNode(mouseX, mouseY));
}
