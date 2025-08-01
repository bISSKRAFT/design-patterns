// base prototype
export abstract class Shape {
  x: number;
  y: number;
  color: string;

  constructor(source?: Shape) {
    if (!source) {
      return;
    } else {
      this.x = source.x;
      this.y = source.y;
      this.color = source.color;
    }
  }

  abstract clone(): Shape;
}

//concrete prototype
export class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(source?: Rectangle) {
    super(source);
    if (!source) {
      return;
    }
    this.width = source.width;
    this.height = source.height;
  }

  clone(): Shape {
    return new Rectangle(this);
  }
}

export class Circle extends Shape {
  radius: number;

  constructor(source?: Circle) {
    super(source);
    if (!source) {
      return;
    }
    this.radius = source.radius;
  }

  clone(): Shape {
    return new Circle(this);
  }
}
