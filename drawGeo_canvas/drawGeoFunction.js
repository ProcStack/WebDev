// canvas - Your canvas' id
// loc - Array of points; [x1,y1, x2,y2, x3,y3, ... xn,yn]
// eCount - Edge count, should be changed different, 0,1,2 are circle alpha fill values; 3,4+ is line creation
//    For eCount, I'll update this usage to be more logical in the future
//    Since I need to decare what type of line is being made, this made things complicated
//    I'm probably going to split this function in 2, its just been easier for me as 1, but bulkier
// size - Size of line / circle diameter
// color - [R,G,B]; [0-255, 0-255, 0-255]
// filled - outlined or filled geometry
//drawGeo("geoDrawTest",[100,100],0,10,[0,0,255],1,1);
function drawGeo(canvas,loc,eCount,size,color,alpha,filled){
	var comp=0;
	var flip=0;
	var x=loc[0];
	var y=loc[1];
	var R=color[0];
	var G=color[1];
	var B=color[2];
	hex="rgb("+Math.floor(R)+","+Math.floor(G)+","+Math.floor(B)+")"; // Prep for coloring solid geometry
	var csW=document.getElementById(canvas).offsetWidth;
	var csH=document.getElementById(canvas).offsetHeight;
	
	docCanvas=document.getElementById(canvas);
	draw=docCanvas.getContext('2d');
	var runCount=1;
	var flippers=[1,1];
	draw.globalAlpha=alpha;
	draw.beginPath();
	draw.lineWidth=Math.max(1,filled);
	if(filled==1){
		draw.fillStyle=hex;
	}else{
		draw.strokeStyle=hex;
	}
	if(eCount<=2){ // Draw a circle
		if(eCount==1){ // Draw a circle fading out
			var grad=draw.createRadialGradient(x,y,1,x,y,size/2);
			grad.addColorStop(0,'rgba('+Math.floor(color[0])+','+Math.floor(color[1])+','+Math.floor(color[2])+',1)');
			if(color.length>4){
				grad.addColorStop(1,'rgba('+Math.floor(color[3])+','+Math.floor(color[4])+','+Math.floor(color[5])+',0)');
			}else{
				grad.addColorStop(1,'rgba('+Math.floor(color[0])+','+Math.floor(color[1])+','+Math.floor(color[2])+',0)');
			}
			draw.fillStyle=grad;
		}else if(eCount==2){ // Draw a circle fading in
			var grad=draw.createRadialGradient(x,y,1,x,y,size/2);
			grad.addColorStop(0,'rgba('+Math.floor(color[0])+','+Math.floor(color[1])+','+Math.floor(color[2])+',0)');
			if(color.length>4){
				grad.addColorStop(1,'rgba('+Math.floor(color[3])+','+Math.floor(color[4])+','+Math.floor(color[5])+',1)');
			}else{
				grad.addColorStop(1,'rgba('+Math.floor(color[0])+','+Math.floor(color[1])+','+Math.floor(color[2])+',1)');
			}
			draw.fillStyle=grad;
		}
		draw.arc(x,y,size/2,0,Math.PI*2); // Draw circle
	}else{ // Draw lines
		if(loc.length>2){ // Make sure its not a single point
			if(eCount==3){ // Draw a linear curve
				draw.moveTo(x,y);
				for(var v=2; v<loc.length; v+=2){
					draw.lineTo(loc[v],loc[v+1]);
				}
				draw.lineJoin = 'round';
				if(size==1 && filled!=-1){
					draw.closePath();
				}else{
					draw.lineJoin = 'miter';
				}
			}else{ // Draw a quadratic curve
				draw.lineJoin = 'round';
				draw.moveTo(x,y);
				for(var v=2; v<loc.length; v+=4){
					draw.quadraticCurveTo(loc[v],loc[v+1], loc[v+2],loc[v+3]);
				}
				if(size==1){
					draw.quadraticCurveTo(loc[loc.length-2],loc[loc.length-1], loc[0],loc[1]);
				}
				if(size==1 && filled!=-1){
					draw.closePath();
				}else{
					draw.lineJoin = 'miter';
				}
			}
		}
	}
	if(filled==1){ // Fill object
		draw.fill();
	}else{ // Stroke object
		draw.stroke();
	}
}
