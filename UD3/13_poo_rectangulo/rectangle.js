class Rectangle {

    // add x1, y1
    constructor(x, y, width,height) {
        this.x = x;
        this.y = y;
        this.topLeft = new point((x-(width/2)),(y+(height/2)))
        this.bottomRight = new point((x+(width/2)),(y-(height/2)))
        this.width = width;
        this.height = height;
    }

    print() {
        console.log(`[${this.x}, ${this.y}]`)
    }

    // area
    GetArea(){
        return this.width * this.height;
    }

    // overlay
    isOverlay(rect){
        if (this.topLeft.x == this.bottomRight.x 
            || this.topLeft.y == this.bottomRight.y 
            || rect.topLeft.x == rect.bottomRight.x 
            || rect.topLeft.y == rect.bottomRight.y){
            return false;
        }
        if (this.topLeft.x > rect.bottomRight.x || rect.topLeft.x > this.bottomRight.x) {
            return false;
        }

        if (this.bottomRight.y > rect.topLeft.y || rect.bottomRight.y > this.topLeft.y) {
            return false;
        }
        return true;
    }
}

class point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

let r1 = new Rectangle(1.3,2,1,1);
let r2 = new Rectangle(1,1,1,1);

console.log(r2.isOverlay(r1));

// let area = r1.area();
// console.log(`area ${area}`)

// let isOverlay = r1.overlay(r2)
