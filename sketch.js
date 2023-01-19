//https://rudy-digipen.github.io/p5.js-workshop/
function preload(){
//	soundFormats()
}
function setup()
{
	createCanvas( window.innerWidth-1,window.innerHeight-1);
	textFont('Consolas');
	textAlign(LEFT, TOP);
	textSize(2);
	cursor("wait")
}

function draw()
{
	if(w!=window.innerWidth-1 || h!=window.innerHeight-1){resizeCanvas( w=window.innerWidth-1, h=window.innerHeight-1);}

	background('#000000');
	fill('#ff0000');
}	
