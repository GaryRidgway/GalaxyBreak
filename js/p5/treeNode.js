function treeNode(x, y, NID) {
  this.x = x;
  this.y = y;
  this.size = 10;
  this.NID = NID;

  this.selected = false;
  this.color = '#f5f5f5';

  this.text = '';
  this.leftChild = null;
  this.rightChild = null;

  this.show = function() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }

  this.clickedOn = function(x, y) {
    if(
      x > this.x-this.size/2 &&
      x < this.x+this.size/2 &&
      y > this.y-this.size/2 &&
      y < this.y+this.size/2
    ) {
      this.selected = true;
      this.color = '#666';
      return true; }
    else {
      this.selected = false;
      this.color = '#f5f5f5';
      return false; }

  }
}
