var ñNoteList = [];
var ñTimePlayBegin = 0;
function ñScenePlayLevelInit(){
	console.log("Here");
//	console.log(ñKeyQueue);
//	console.log(ñKeyQueue[3]);
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
	for(var ç=ñIndexOfHitObjects+1; ñOsu[ç]!=[]; ç++){
		ñTemp=ñOsu[ç].split(',');
		ñNoteList.push(new ñNote(parseInt(ñTemp[2]), floor(parseInt(ñTemp[0])*4/512)));
	}
/*	for(var ç=0;ç<ñChartViatores.ñNoteList.length; ç++){
//		console.log("Reg : "+ñChartViatores.ñToMilliseconds(ç));
		ñNoteList.push(new ñNote(ñChartViatores.ñToMilliseconds(ç), ñChartViatores.ñNoteList[ç].ñLine));
	}*/
	ñJudjementCount=[0,0,0,0,0,0];
//	console.log(ñNoteList);
	ñS.play();
	ñNoteList.sort((ñA, ñB)=>{return ñA.ñTime - ñB.ñTime;});
//	console.log(ñNoteList);
}
var ñJudjementInfo={
	ñState:undefined,
	ñLastHitTime:-1000
}

var ñKeyBind = [83, 68, 75, 76]

var ñJudjementOffset=150;
var ñVisualOffset=120;
var ñSStop=true;
var ñField={
	width:	undefined,
	height:	undefined
}
var ñKeyQueue=[[],[],[],[]];

var ñJudjementCount=[];
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
//			if((height>>1)-(ñField.ñHeight>>1) + ñField.ñHeight*5/6 - ñBPM * ñScrollSpeed * (ñNoteList[ç].ñTime - ñRunTime + ñTimePlayBegin + ñVisualOffset) / 1000 - (ñNoteList[ç].ñHeight>>1) < -1000)continue;
		console.log(ñKeyQueue[ñNoteList[ç].ñLine].length);
		ñTemp=ñRunTime-ñTimePlayBegin-ñNoteList[ç].ñTime - ñJudjementOffset;
		if(300<ñTemp){
			console.log("A");
			ñJudjementInfo={
				ñState:"FAIL",
				ñLastHitTime:ñRunTime
			}
			ñNoteList.splice(ñNoteList.indexOf(ñNoteList[ç]),1);
			ñJudjementCount[5]++;
			continue;
		}
		if(ñKeyQueue[ñNoteList[ç].ñLine].length){
			ñTemp=ñKeyQueue[ñNoteList[ç].ñLine][0]-ñTimePlayBegin-ñNoteList[ç].ñTime - ñJudjementOffset;
			console.log(ñTemp);
			if(ñTemp<-300 || 300<ñTemp){
				ñKeyQueue[ñNoteList[ç].ñLine].splice(0,1);
				ç++;
				console.log("NOP");
				continue;
			}else if(ñTemp<-188 || 188<ñTemp){
				console.log("B");
				ñJudjementInfo={
					ñState:"FAIL",
					ñLastHitTime:ñRunTime
				}
				console.log("FAIL");
				ñJudjementCount[5]++;
			}else if(ñTemp<-127 || 127<ñTemp){
				ñJudjementInfo={
					ñState:"MISS",
					ñLastHitTime:ñRunTime
				}
				console.log("MISS");
				ñJudjementCount[4]++;
			}else if(ñTemp<-97 || 97<ñTemp){
				ñJudjementInfo={
					ñState:"NORMAL",
					ñLastHitTime:ñRunTime
				}
				console.log("NORMAL");
				ñJudjementCount[3]++;
			}else if(ñTemp<-64 || 64<ñTemp){
				ñJudjementInfo={
					ñState:"GOOD",
					ñLastHitTime:ñRunTime
				}
				console.log("GOOD");
				ñJudjementCount[2]++;
			}else if(ñTemp<-16 || 16<ñTemp){
				ñJudjementInfo={
					ñState:"COOL",
					ñLastHitTime:ñRunTime
				}
				console.log("COOL");
				ñJudjementCount[1]++;
			}else{
				ñJudjementInfo={
					ñState:"KOOL",
					ñLastHitTime:ñRunTime
				}
				console.log("KOOL");
				ñJudjementCount[0]++;
			}

//			console.log(ñKeyQueue[ñNoteList[ç].ñLine].splice(0,1));
			ñKeyQueue[ñNoteList[ç].ñLine].splice(0,1);
			ñNoteList.splice(ñNoteList.indexOf(ñNoteList[ç]),1);
			continue;
		}
		ñNoteList[ç].ñPrint();
		ç++;
	}
	if(ñJudjementInfo.ñLastHitTime+500>ñRunTime){
		fill('#000000');
		textAlign(CENTER, TOP);
		textSize(32);
		text(ñJudjementInfo.ñState, width>>1, (height>>1)-(ñField.ñHeight>>1) + ñField.ñHeight*7/12);
	}
	fill('#000000');
	textSize(24);
	text(""+(isNaN(ñTemp=floor(100*
		(ñJudjementCount[0]*100
		+ñJudjementCount[1]*80
		+ñJudjementCount[2]*60
		+ñJudjementCount[3]*40
		+ñJudjementCount[4]*20)/
		(ñJudjementCount[0]
		+ñJudjementCount[1]
		+ñJudjementCount[2]
		+ñJudjementCount[3]
		+ñJudjementCount[4]
		+ñJudjementCount[5]))/100)? 100 : ñTemp)
		, width>>1, (height>>1)-(ñField.ñHeight>>1) + ñField.ñHeight*9/12);
	for(var ç=0;ç<4;ç++){
		if(keyIsDown(ñKeyBind[ç])){
			fill(0,0,0,64);
			rect((width>>1)-(ñField.ñWidth>>1) + (ç*ñField.ñWidth>>2), (height>>1)-(ñField.ñHeight>>1), 
			ñField.ñWidth>>2, ñField.ñHeight);
		}
	}
	if(ñChartViatores.ñDuration < ñRunTime-ñTimePlayBegin){
		ñRunner=ñRunnerList[3];
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
				case ñKeyBind[0]:{
					ñKeyQueue[0].push(ñTime);
					break;
				}
				case ñKeyBind[1]:{
					ñKeyQueue[1].push(ñTime);
					break;
				}
				case ñKeyBind[2]:{
					ñKeyQueue[2].push(ñTime);
					break;
				}
				case ñKeyBind[3]:{
					ñKeyQueue[3].push(ñTime);
					break;
				}
			}
			break;
		}
	}
}

function ñSceneResultInit(){
	ñS.stop();
}
function ñSceneResult(){
	background('#808080');
	textSize(96);
	text(""+(isNaN(ñTemp=floor(100*
		(ñJudjementCount[0]*100
		+ñJudjementCount[1]*80
		+ñJudjementCount[2]*60
		+ñJudjementCount[3]*40
		+ñJudjementCount[4]*20)/
		(ñJudjementCount[0]
		+ñJudjementCount[1]
		+ñJudjementCount[2]
		+ñJudjementCount[3]
		+ñJudjementCount[4]
		+ñJudjementCount[5]))/100)? 100 : ñTemp)

	, width>>1, height*2/7);
}
