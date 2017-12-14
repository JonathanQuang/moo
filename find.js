var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
//var targetX = boxWidth / 2;
//var targetY = boxHeight / 2;

//give random x and y coordinates to the target
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

//
var findIt = function(e) {
  console.log(e.x + ',' + e.y + ' | ' + targetX + ',' + targetY);
  console.log(distance(e.x,e.y,targetX,targetY));
  
  var maxDist = maxDistance(targetX,targetY);
  
  var currentDistance = distance(e.x,e.y,targetX,targetY);

//generate a color string according to the ratio  between current and maximum distance
  var colorString = 'rgb(' + '0,0,' + Math.floor(256 - (256*currentDistance/maxDist)) + ')';
  console.log(colorString);

//change background color using the generated color string
  box.style.backgroundColor=colorString;

  //if the mouse is within a 10px range of the target, set background color to white and display egg image
	if (isCloseEnough(e.x,e.y,targetX,targetY,10)){
		box.style.backgroundColor="white";
		box.style.backgroundImage="url('http://www.incredibleegg.org/wp-content/themes/incredibleegg/assets/images/facts-left-egg.png')";
	}	

};



var maxDistance = function(pX,pY){
	var maxX = 0;
	var maxY = 0;
	if (pX < boxWidth/2){
		maxX = boxWidth;
	}
	if (pY < boxHeight/2){
		maxY = boxHeight;
	}
	return distance(pX,pY,maxX,maxY);
};

//to see if the cursor is within a 10px range of the target
var isCloseEnough = function(cursorX,cursorY,targetX,targetY,threshold){
	return (distance(cursorX,cursorY,targetX,targetY) <= threshold);
	
};


box.addEventListener("mousemove", findIt);

