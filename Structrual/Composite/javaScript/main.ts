import { Circle, CompoundGraphic, Dot } from "./graphic.ts"

const all = new CompoundGraphic();
all.add(new Dot(1, 2));
all.add(new Circle(1, 2, 3));
all.draw();
