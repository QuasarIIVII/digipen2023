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
	]
}

function preload(){
	soundFormats('mp3');
	ñS=loadSound('(1s - 2m 20s) 【Lanota】Viatores.mp3');
}
function setup()
{
	ñInitRunnerList();
	createCanvas( window.innerWidth-1,window.innerHeight-1);
//	cursor("wait")
	ñRunner_=undefined;
	ñRunner=ñRunnerList[0];		//ñSceneStart
	console.log(width, height);
}
