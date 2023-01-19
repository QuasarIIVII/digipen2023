class $${
	constructor(){
		this.p={
			x:w>>1,
			y:h>>1,
		}
		this.v=0;
		this.a;
		this.r=0;
	}
	update(x, y, Ñ){
		console.log(this.p.y-y,x-this.p.x);
		console.log(this.r=atan2(this.p.y-y,x-this.p.x));
		if(Ñ){
			this.p.x=x;
			this.p.y=y;
		}
	}
	draw(){
		translate(this.p.x, this.p.y);
		fill('#ffffff');
		angleMode(RADIANS);
		rotate(-this.r);
		triangle(10,0, -30,10, -30,-10)
		translate(0,0);
	}
}