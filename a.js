//https://rudy-digipen.github.io/p5.js-workshop/
const ÑCanvasSizeChanged=0xA;
var ñRunTime=0;
function keyPressed(){
	console.log(keyCode, ñRunTime, 1000/deltaTime, getFrameRate());
}
var ñEventQueue = [];
function draw()
{
	ñRunTime+=deltaTime;
	if(width!=window.innerWidth-1 || height!=window.innerHeight-1){
		resizeCanvas( window.innerWidth-1, window.innerHeight-1);
		ñEventQueue.push(ÑCanvasSizeChanged);
	}
//	background('#000000');
	if(ñEventQueue.length){
		console.log(ñRunner_.ñRunner);
		console.log("Event");
		if(ñRunner_.ñEventHandler)ñRunner_.ñEventHandler(ñEventQueue.splice(0,1)[0]);
		else ñEventQueue.splice(0,1)[0], console.log("False");
	}
	if(ñRunner == ñRunner_){
		ñRunner.ñRunner();
	}else{
		if(ñRunner.ñInitializer)ñRunner.ñInitializer();
		ñRunner.ñRunner();
		ñRunner_=ñRunner;
	}

//	fill('#ff0000');
}	
//width > height*1.4