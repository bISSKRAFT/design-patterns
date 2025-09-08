import { Remote } from "./abstraction.ts";
import { Tv } from "./implementation.ts";

const tv = new Tv();

const tvRemote = new Remote(tv);
tvRemote.togglePower();
// ...
