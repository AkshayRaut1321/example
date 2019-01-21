export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log(this.x + " " + this.y);
    }
    get X() {
        return this.x;
    }
    get Y() {
        return this.y;
    }
    set X(value) {
        if (value < 0)
            throw new Error("Cannot set value less than 0");
    }
}
