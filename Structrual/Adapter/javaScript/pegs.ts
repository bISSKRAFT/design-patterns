export interface IRoundPeg {
  getRadius(): number;
}

export class RoundPeg implements IRoundPeg {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getRadius(): number {
    return this.radius;
  }
}

export class SquarePeg {
  width: number;

  constructor(width: number) {
    this.width = width;
  }

  getWidth(): number {
    return this.width;
  }
}
