var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
//var targetX = boxWidth / 2;
//var targetY = boxHeight / 2;
var targetX = Math.random() * boxWidth;
var targetY = Math.random() * boxHeight;

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
  console.log(e.x + ',' + e.y + ' | ' + targetX + ',' + targetY);
  console.log(distance(e.x,e.y,targetX,targetY));
  
  
  var maxDist = maxDistance(targetX,targetY);
  
  var currentDistance = distance(e.x,e.y,targetX,targetY);
  var colorString = 'rgb(' + '0,0,' + Math.floor(256 - (256*currentDistance/maxDist)) + ')';
  console.log(colorString);
  box.style.backgroundColor=colorString;
};

/*
your OTHER FXNS

*/
var maxDistance = function(pX,pY){
	var maxX = 0;
	var maxY = 0;
	if (pX < box.offsetWidth/2){
		maxX = box.offsetWidth;
	}
	if (pY < box.offsetHeight/2){
		maxY = box.offsetHeight;
	}
	return distance(pX,pY,maxX,maxY);
}



box.addEventListener("mousemove", findIt);

