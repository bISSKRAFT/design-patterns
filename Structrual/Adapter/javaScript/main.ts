import { SquarePegAdapter } from "./adapter.ts";
import { RoundPeg, SquarePeg } from "./pegs.ts";

export class RoundHole {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
  getRadius(): number {
    return this.radius;
  }
  fits(peg: RoundPeg): boolean {
    return peg.getRadius() >= this.radius;
  }
}

const hole = new RoundHole(5);
const roundPeg = new RoundPeg(5);
console.log(hole.fits(roundPeg));

//Adapter case:
const squarePeg = new SquarePeg(5);
// console.log(hole.fits(squarePeg)); -> does not work: Interfaces not matching
console.log(hole.fits(new SquarePegAdapter(squarePeg))); // Adapter implelments IRoundPeg for `getRadius()`
