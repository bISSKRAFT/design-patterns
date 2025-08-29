import { RoundPeg, SquarePeg } from "./pegs.ts";

export class SquarePegAdapter extends RoundPeg {
  peg: SquarePeg;

  constructor(squarePeg: SquarePeg) {
    super(0); // you dont need roundPeg radius -> you could define a common interface to avoid this
    this.peg = squarePeg;
  }

  getRadius(): number {
    return (this.peg.getWidth() * Math.sqrt(2)) / 2;
  }
}
