class ${
	constructor(pos, speed, size, boundary, color){
		this.º={
			á: pos.x,
			à: speed.x,
			â: 0,
		}
		this.ª={
			á: pos.y,
			à: speed.y,
			â: 100,
		}
		this.size=size;
		this.ï=boundary;
		this.î=color;
	}
	update(){
		if(this.ª.á>=this.ï.b){
			this.º.à*=0.1;
//			if(this.ª.à<)
			this.ª.à*=-0.99;
			this.ª.á=this.ï.b;
		}

		this.º.á+=this.º.à * deltaTime / 1000;
		this.º.à+=this.º.â * deltaTime / 1000;

		this.ª.á+=this.ª.à * deltaTime / 1000;
		this.ª.à+=this.ª.â * deltaTime / 1000;

		if(this.º.á>this.ï.r)		this.º.á-=this.ï.r+1;
		else if(this.º.á<this.ï.l)	this.º.á+=this.ï.r-this.ï.l+1;
		
	}
	draw(){
//		console.log(this.º.á, this.ª.á);
		fill(this.î);
		circle(this.º.á, this.ª.á, this.size);
	}
}
