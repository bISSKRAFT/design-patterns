import { CarBuilder } from "./builder.ts";
import { Car } from "./car.ts";
import { Director } from "./director.ts";

const director = new Director();
const builder = new CarBuilder();

director.makeSportsCar(builder);
const car: Car = builder.getResult();
car.turnOn();
