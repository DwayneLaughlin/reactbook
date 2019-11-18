const Shape = require("./shape");
//"extends" is like a child of the OG class. The constructor is going to define the params for the extended thing. Then super is going to use the new constructor for the OG class. 
class Rectangle extends Shape {
  constructor(sideA, sideB) {
    const area = sideA * sideB;
    const perimeter = sideA * 2 + sideB * 2;

    super(area, perimeter);
    this.sideA = sideA;
    this.sideB = sideB;
  }
}

const rectangle = new Rectangle(12, 9);
rectangle.printInfo();
