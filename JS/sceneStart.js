function ñSceneStart(){
	background('#808080');
	fill('#ffffff');
	textAlign(LEFT,TOP);
	textSize(128);
	text("Press ANY key to start", 0, 0.5);
	if(keyIsDown(32)){
		ñRunner=ñRunnerList[1];		//ñScenePlayLevel
		console.log("Key");
	}
}
