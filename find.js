var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  var horizontal = x1 - x0;
  var vertical = y1 - y0;
  return Math.sqrt(horizontal * horizontal + vertical * vertical);
};

console.log(distance(0,0,3,4));

var findIt = function(e) {
  console.log(e.x + ',' + e.y);
  console.log(distance(e.x,e.y,targetX,targetY));
  var maxDistance = distance(0,0,boxHeight,boxWidth);
  var currentDistance = distance(e.x,e.y,targetX,targetY);
  var colorString = 'rgb(' + '0,0,' + Math.floor(256 - (256*currentDistance/maxDistance)) + ')';
  console.log(colorString);
  box.style.backgroundColor=colorString;
};

/*
your OTHER FXNS

*/

box.addEventListener("mousemove", findIt);

