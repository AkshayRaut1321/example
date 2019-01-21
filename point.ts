export class Point {
    constructor(private x?: number, private y?: number){
    }
    draw() {
        console.log(this.x + " "  + this.y);
    }
    get X(){
      return this.x;
    }
    get Y(){
      return this.y;
    }
    set X(value) {
      if(value < 0)
        throw new Error("Cannot set value less than 0");
    }
}