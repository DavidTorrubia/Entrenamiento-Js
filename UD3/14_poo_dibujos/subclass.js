class Figure {
  constructor(x, y) {
    this.coord = new point(x, y);
  }
  print() {
    console.log("I'm a figure");
  }
  draw(){
    this.print();
    this.drawPosition();
    console.log('----------------------------------')
  }
  drawPosition(){
    console.log(`I'm at X:${this.coord.x} Y:${this.coord.y}`)
  }
}

class Square extends Figure {
  constructor(x1, y1, x2, y2) {
    super(x1,y1);
    this.coord2 = new point(x2, y2);
  }
  print() {
    super.print();
    console.log("and a square");
  }
  drawPosition(){
    super.drawPosition();
    console.log(`and X2:${this.coord2.x} Y2:${this.coord2.y}`);
  }
}
class point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
class Circle extends Figure {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }
  print(){
    super.print();
    console.log("and a Circle")
  }
  drawPosition(){
    super.drawPosition();
    console.log(`and my radius is ${this.radius}`)
  }
}

class Triangle extends Figure {
    constructor (x,y,height,width){
        super(x,y)
        this.height=height;
        this.width = width;
    }
  print() {
    super.print();
    console.log("and a triangle");
  }
  drawPosition(){
    super.drawPosition();
    console.log(`my height is ${this.height} and my width is ${this.width}`)
  }
}

let draws = [
  new Figure(3, 4),
  new Square(7, 8, 9, 9),
  new Circle(4, 5, 7),
  new Triangle(2, 3, 2, 4),
];
console.log('----------------------------------')
draws.forEach((f) => f.draw());
