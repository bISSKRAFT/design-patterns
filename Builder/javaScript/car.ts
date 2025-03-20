export abstract class Engine {
  type: string;

  abstract sound(): void;
}

export class SportEngine extends Engine {
  constructor() {
    super();
    this.type = "SportEngine";
  }

  override sound(): void {
    console.log("Sport VROM");
  }
}

export class SUVEngine extends Engine {
  constructor() {
    super();
    this.type = "SUVEngine";
  }

  override sound(): void {
    console.log("SUV VROM");
  }
}

export class Car {
  type: string;
  engine: Engine;
  seats: number;
  gps: boolean;
  tripComputer: number;

  turnOn(): void {
    console.log(this.type, "Car turned on");
  }
}
