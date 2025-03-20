import { Builder } from "./builder.ts";
import { SportEngine } from "./car.ts";

export class Director {
  makeSportsCar(builder: Builder) {
    builder.reset();
    builder.setType("Sports Car");
    builder.setSeats(2);
    builder.setEngine(new SportEngine());
    builder.setTripComputer();
    builder.setGPS();
  }
}
