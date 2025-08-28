import { Car, Engine } from "./car.ts";

export interface Builder {
  reset(): void;
  setType(type: string): CarBuilder;
  setSeats(number: number): CarBuilder;
  setEngine(engine: Engine): CarBuilder;
  setTripComputer(): CarBuilder;
  setGPS(): CarBuilder;
}

export class CarBuilder implements Builder {
  car: Car;

  reset(): void {
    // initalize new Product
    this.car = new Car();
  }

  setType(type: string): CarBuilder {
    this.car.type = type;
    return this;
  }

  setSeats(number: number): CarBuilder {
    this.car.seats = number;
    return this;
  }

  setEngine(engine: Engine): CarBuilder {
    this.car.engine = engine;
    return this;
  }

  setTripComputer(): CarBuilder {
    this.car.tripComputer = 1;
    return this;
  }

  setGPS(): CarBuilder {
    this.car.gps = false;
    return this;
  }

  getResult(): Car {
    return this.car;
  }
}
