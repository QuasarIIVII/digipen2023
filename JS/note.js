const ÑNormalNote = 0;
const ÑLongNote = 1;
const ÑTag = 2;

class ñNote{
	constructor(ñTime, ñLine){
		this.ñType=ÑNormalNote;
		this.ñTime=ñTime;
		this.ñLine=ñLine;
		this.ñHeight=100;
	}
	ñPrint(){
//		console.log(floor((height>>1)-(ñField.ñHeight>>1) + ñField.ñHeight*5/6 - ñBPM * ñScrollSpeed * (this.ñTime - ñRunTime + ñTimePlayBegin)) / 1000);
		fill('#26e878');

		rect(
			(width>>1)-(ñField.ñWidth>>1) + ñField.ñWidth * this.ñLine/4,
			(height>>1)-(ñField.ñHeight>>1) + ñField.ñHeight*5/6 - ñBPM * ñScrollSpeed * (this.ñTime - ñRunTime + ñTimePlayBegin) / 1000 - (this.ñHeight>>1),
			ñField.ñWidth>>2, this.ñHeight
		);
	}
	
}
class ñTag{
	constructor(ñTime, ñMessage){
		this.ñType=ÑTag;
		this.ñTime=ñTime;
		this.ñMessage=ñMessage;
	}
	
}
