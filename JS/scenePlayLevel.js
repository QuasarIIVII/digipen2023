var ñNoteList = [];
var ñTimePlayBegin = 0;
function ñScenePlayLevelInit(){
	console.log("Here");
	console.log(ñKeyQueue);
	console.log(ñKeyQueue[3]);
	if(width > height*0.6125){
		ñField.ñWidth=floor(height*0.6125);
		ñField.ñHeight=height;
	}else{
		ñField.ñWidth=width;
		ñField.ñHeight=floor(width/0.6125);
	}

	ñTimePlayBegin = ñRunTime;
	/*
	ñNoteList.push(new ñNote(3000, 0));
	ñNoteList.push(new ñNote(3200, 1));
	ñNoteList.push(new ñNote(3400, 2));
	ñNoteList.push(new ñNote(3600, 3));
	ñNoteList.push(new ñNote(3800, 2));
	ñNoteList.push(new ñNote(4000, 1));
	ñNoteList.push(new ñNote(4200, 0));
	*/
	for(var ç=0;ç<ñChartViatores.ñNoteList.length; ç++){
		console.log("Reg : "+ñChartViatores.ñToMilliseconds(ç));
		ñNoteList.push(new ñNote(ñChartViatores.ñToMilliseconds(ç), ñChartViatores.ñNoteList[ç].ñLine));
	}
	console.log(ñNoteList);
	ñS.play();
	ñNoteList.sort((ñA, ñB)=>{return ñA.ñTime - ñB.ñTime;});
	console.log(ñNoteList);
}

var ñSStop=true;
var ñField={
	width:	undefined,
	height:	undefined
}
var ñKeyQueue=[[],[],[],[]];
function ñScenePlayLevel(){
	if(!keyIsPressed)ñSStop=false;
	if(keyIsPressed && !ñSStop){
//		ñS.stop();
		ñSStop=true;
		console.log("Key");
	}
	background('#808080');
	fill('#ffffff');
	rect((width>>1)-(ñField.ñWidth>>1), (height>>1)-(ñField.ñHeight>>1),ñField.ñWidth, ñField.ñHeight);
	fill('#000000')
	
	line(
		width>>1, (height>>1)-(ñField.ñHeight>>1),
		width>>1, (height>>1)-(ñField.ñHeight>>1)+ñField.ñHeight
	);
	line(
		(width>>1) - (ñField.ñWidth>>2), (height>>1)-(ñField.ñHeight>>1),
		(width>>1) - (ñField.ñWidth>>2), (height>>1)-(ñField.ñHeight>>1)+ñField.ñHeight
	);
	line(
		(width>>1) + (ñField.ñWidth>>2), (height>>1)-(ñField.ñHeight>>1),
		(width>>1) + (ñField.ñWidth>>2), (height>>1)-(ñField.ñHeight>>1)+ñField.ñHeight
	);
	line(
		(width>>1)-(ñField.ñWidth>>1), (height>>1)-(ñField.ñHeight>>1) + ñField.ñHeight*5/6,
		(width>>1)-(ñField.ñWidth>>1) + ñField.ñWidth, (height>>1)-(ñField.ñHeight>>1) + ñField.ñHeight*5/6,
	);
	for(var ç=0;ç<ñNoteList.length;){
		console.log(ñKeyQueue[ñNoteList[ç].ñLine].length);
		if(ñKeyQueue[ñNoteList[ç].ñLine].length){
			console.log("Hello");
			 ñTemp=ñKeyQueue[ñNoteList[ç].ñLine][0]-ñNoteList[ç].ñTime;
			 console.log(ñTemp);
/*			if(ñTemp>97){
				console.log("Late");
			}else if(ñTemp < -97){
				console.log("Early");
			}else{
				console.log("Perfect");
			}*/
//			console.log(ñKeyQueue[ñNoteList[ç].ñLine].splice(0,1));
			ñKeyQueue[ñNoteList[ç].ñLine].splice(0,1);
			console.log(ñNoteList.indexOf(ñNoteList[ç]));
			ñNoteList.splice(ñNoteList.indexOf(ñNoteList[ç]),1);
			continue;
		}
		ñNoteList[ç].ñPrint();
		ç++;
	}
}

function ñScenePlayLevelEvent(ñMessage, ñParams, ñTime){
	console.log("Event : "+ñMessage + ", Time :  : " + ñTime + ", " + ñParams);
	switch(ñMessage){
		case ÑCanvasSizeChanged:{
			if(width > height*0.6125){
				ñField.ñWidth=floor(height*0.6125);
				ñField.ñHeight=height;
			}else{
				ñField.ñWidth=width;
				ñField.ñHeight=floor(width/0.6125);
			}
			break;
		}
		case ÑKeyyPressed:{
			switch(ñParams[0]){
				case 83:{
					ñKeyQueue[0].push(ñTime);
					break;
				}
				case 68:{
					ñKeyQueue[1].push(ñTime);
					break;
				}
				case 75:{
					ñKeyQueue[2].push(ñTime);
					break;
				}
				case 76:{
					ñKeyQueue[3].push(ñTime);
					break;
				}
			}
			break;
		}
	}
}
