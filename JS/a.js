//https://rudy-digipen.github.io/p5.js-workshop/

const ÑCanvasSizeChanged=0xA;
const ÑKeyyPressed=0xB;

var ñRunTime=0;

function keyPressed(){
	ñEventQueuePush(ÑKeyyPressed, [keyCode]);
//	console.log(keyCode, ñRunTime, 1000/deltaTime);
}
var ñEventQueue = [];
function ñEventQueuePush(çMessage, çParams = []){
	ñEventQueue.push({
		ñMessage : çMessage,
		ñParams : çParams,
		ñTime : ñRunTime,
	});
}
function draw()
{
	frameRate(60);
//	console.log(deltaTime);
	ñRunTime+=deltaTime;
	
	if(width!=window.innerWidth-1 || height!=window.innerHeight-1){
		resizeCanvas( window.innerWidth-1, window.innerHeight-1);
		ñEventQueuePush(ÑCanvasSizeChanged);
	}

	if(ñEventQueue.length){
		let ñTemp;
		if(ñRunner_.ñEventHandler)ñRunner_.ñEventHandler((ñTemp=ñEventQueue.splice(0,1)[0]).ñMessage, ñTemp.ñParams, ñTemp.ñTime);
		else ñEventQueue.splice(0,1)[0];
	}
	if(ñRunner == ñRunner_){
		ñRunner.ñRunner();
	}else{
		console.log("Scene Change");
		while(ñEventQueue.length){
			if(ñRunner_.ñEventHandler)ñRunner_.ñEventHandler(ñEventQueue.splice(0,1)[0]);
			else ñEventQueue.splice(0,1)[0];
		}
		if(ñRunner.ñInitializer)ñRunner.ñInitializer();
		ñRunner.ñRunner();
		ñRunner_=ñRunner;
	}

//	fill('#ff0000');
}

var ñBPM=150, ñScrollSpeed=11;
