function ñNop(){}

var ñRunner, ñRunner_;
var ñRunnerList=[]

function ñInitRunnerList(){
		ñRunnerList=[
		{
			ñRunner			: ñSceneStart,
			ñInitializer	: undefined,
			ñEventHandler	: undefined,
		},
		{
			ñRunner			: ñScenePlayLevel,
			ñInitializer	: ñScenePlayLevelInit,
			ñEventHandler	: ñScenePlayLevelEvent,
		},
		{
			ñRunner			: ñNop,
			ñInitializer	: undefined,
			ñEventHandler	: undefined,
		},
		{
			ñRunner			: ñSceneResult,
			ñInitializer	: ñSceneResultInit,
			ñEventHandler	: undefined,
		}
	]
}

function preload(){
	soundFormats('mp3');
	ñS=loadSound('Assets/a/audio.mp3');
	ñOsu=loadStrings('Assets/a/Yanagida Ethnica - For You the Bellz Toll (Keiga) [Hard].osu');
}
function setup()
{
	ñInitRunnerList();
	createCanvas( window.innerWidth-1,window.innerHeight-1);
//	cursor("wait")
	ñRunner_=undefined;
	ñRunner=ñRunnerList[0];		//ñSceneStart
//	console.log(width, height);
	ñOsu.forEach(ç => {
		ñTemp=ç.split(': ');
		console.log(ñTemp);
		switch(ñTemp[0]){
			case "AudioFilename":{
				console.log(ñTemp[1]);
				break;
			}
		}
		
	})
	console.log(ñIndexOfHitObjects= ñOsu.indexOf('[HitObjects]'));
}
