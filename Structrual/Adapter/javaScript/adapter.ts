import { IRoundPeg, SquarePeg } from "./pegs.ts";

export class SquarePegAdapter implements IRoundPeg {
  peg: SquarePeg;

  constructor(squarePeg: SquarePeg) {
    this.peg = squarePeg;
  }

  getRadius(): number {
    return (this.peg.getWidth() * Math.sqrt(2)) / 2;
  }
}
