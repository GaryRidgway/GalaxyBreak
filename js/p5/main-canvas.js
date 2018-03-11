var treeNodes = [];
var NID = 0;

function setup() {
  var canvas = createCanvas(2500, 2000);
  canvas.parent('#canvas-container');
  canvas.mouseClicked(COC);
  background('#3c3c3c');
}

function draw() {
  treeNodes.forEach(function(node) {
    node.show();
  });
}

// Function for a Click On Canvas.
function COC() {
  isSelect = false;
  treeNodes.forEach(function(node, index) {
    if(node.clickedOn(mouseX, mouseY)) {
      isSelect = true;
    }
  });
  if (isSelect) {

  } else {
    treeNodes.push(new treeNode(mouseX, mouseY, NID));
    NID ++;
  }
}

function DOC() {
  treeNodes.forEach(function(node, index) {
    if(node.selected) {
      console.log('WAHH')
    }
  });
}
