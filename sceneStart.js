function ñSceneStart(){
	background('#000000');
	fill('#ffffff');
	textFont('Consolas');
	textAlign(LEFT, TOP);
	textSize(32);
	text("Press ANY key to start", 0, 0);
	if(keyIsPressed){
		ñRunner=ñRunnerList[1];		//ñScenePlayLevel
	}
}
function ñScenePlayLevelInit(){
	ñS.play();
}
var ñSStop=true;
var ñField={
	width:	undefined,
	height:	undefined
}
function ñScenePlayLevel(){
	if(!keyIsPressed)ñSStop=false;
	if(keyIsPressed && !ñSStop){
		ñS.stop();
		ñSStop=true;
	}
//	rect((width>>1)-(ñField.width>>1), (height>>1)-(ñField.height>>1));
}

function ñScenePlayLevelEvent(event){
	console.log("asdf");
}