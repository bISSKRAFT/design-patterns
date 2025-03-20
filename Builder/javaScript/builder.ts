import { Car, Engine } from "./car.ts";

export interface Builder {
  reset(): void;
  setType(type: string): void;
  setSeats(number: number): void;
  setEngine(engine: Engine): void;
  setTripComputer(): void;
  setGPS(): void;
}

export class CarBuilder implements Builder {
  car: Car;

  reset(): void {
    // initalize new Product
    this.car = new Car();
  }

  setType(type: string) {
    this.car.type = type;
  }

  setSeats(number: number) {
    this.car.seats = number;
  }

  setEngine(engine: Engine) {
    this.car.engine = engine;
  }

  setTripComputer(): void {
    this.car.tripComputer = 1;
  }

  setGPS(): void {
    this.car.gps = false;
  }

  getResult(): Car {
    return this.car;
  }
}
