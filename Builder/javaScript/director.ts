import { Builder } from "./builder.ts";
import { SportEngine } from "./car.ts";

export class Director {
  makeSportsCar(builder: Builder) {
    builder.reset();
    builder
      .setType("Sports Car")
      .setSeats(2)
      .setEngine(new SportEngine())
      .setTripComputer()
      .setGPS();
  }
}
