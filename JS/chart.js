class ñChart{
	constructor(ñTitle, ñArtist, ñBPM, ñMeasureLength, ñOffset, ñDuration, ñNoteList){
		this.ñTitle=ñTitle;
		this.ñArtist,ñArtist;
		this.ñBPM=ñBPM;
		this.ñMeasureLength=ñMeasureLength; //Length of a Measure in Beat
		this.ñOffset=ñOffset;
		this.ñDuration=ñDuration;
		
		this.ñNoteList=ñNoteList;
/*		this.ñNoteList=[{
			ñMeasureNumber	: 
			ñBeatNumber		:
			
			ñNoteType	: ÑNormalNote/ÑLongNote
			ñLine		: 0~3
			ñDuration	: in Beats
		},];*/
	}
	ñToMilliseconds(ñNoteNumber){
		return (this.ñNoteList[ñNoteNumber].ñMeasureNumber * this.ñMeasureLength + this.ñNoteList[ñNoteNumber].ñBeatNumber) * 60000 / this.ñBPM + this.ñOffset;
	}
}

var ñChartViatores = new ñChart("Viatores", "TQ", 144, 4, 2393, 15000, [
{ñMeasureNumber : 0x0000, ñBeatNumber : 0,	ñNoteType : ÑNormalNote, ñLine : 0, ñDuration : 0,},
{ñMeasureNumber : 0x0000, ñBeatNumber : 0,	ñNoteType : ÑNormalNote, ñLine : 3, ñDuration : 0,},
{ñMeasureNumber : 0x0000, ñBeatNumber : 1.5,ñNoteType : ÑNormalNote, ñLine : 1, ñDuration : 0,},
{ñMeasureNumber : 0x0000, ñBeatNumber : 3,	ñNoteType : ÑNormalNote, ñLine : 2, ñDuration : 0,},
{ñMeasureNumber : 0x0001, ñBeatNumber : 0,	ñNoteType : ÑNormalNote, ñLine : 0, ñDuration : 0,},
{ñMeasureNumber : 0x0001, ñBeatNumber : 0,	ñNoteType : ÑNormalNote, ñLine : 3, ñDuration : 0,},
])
