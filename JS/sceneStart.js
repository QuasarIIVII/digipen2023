function ñSceneStart(){
	background('#808080');
	fill('#ffffff');
	textFont('Consolas');
	textAlign(LEFT, TOP);
	textSize(32);
	text("Press ANY key to start", 0, 0);
	if(keyIsPressed){
		ñRunner=ñRunnerList[1];		//ñScenePlayLevel
		console.log("Key");
	}
}
