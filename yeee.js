class Ball{
	constructor(º,ª,sz,b){
		this.p={
			º: º,
			ª: ª,
		}
		this.v={
			º: 5,
			ª: 5,
		}
		this.sz=sz;
		this.b=b
	}
	update(table){
//		console.log(this.table.º);
		this.p.º+=this.v.º;
		this.p.ª+=this.v.ª;
		if(this.p.º<this.b.l || this.b.r<this.p.º ||
			table.ª<this.p.ª && this.p.ª<table.h+table.ª && table.º<this.p.º && this.p.º<table.º+table.w
		   )this.v.º*=-1;

		if(this.p.ª<this.b.t || this.b.b<this.p.ª ||
			table.º<this.p.º && this.p.º<table.w+table.º && table.ª<this.p.ª && this.p.ª<table.ª+table.h
			)this.v.ª*=-1;
	}
	draw(){
		circle(this.p.º, this.p.ª,this.sz);
	}
}
class Table{
	constructor(ª,width,height){
		this.ª=ª;
		this.º=0;
		this.w=width;
		this.h=height;
	}
	move(º){
		this.º=º;
	}
	draw(){
		rect(this.º,this.ª,this.w,this.h);
	}
}