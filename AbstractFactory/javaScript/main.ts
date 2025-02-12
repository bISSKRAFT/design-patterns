import {
  AbstractFactory,
  ModernFactory,
  VictorianFactory,
} from "./factories.ts";
import { ISofa } from "./products.ts";

class Client {
  factory: AbstractFactory;

  constructor(factory: AbstractFactory) {
    // every variant factory can be used here
    this.factory = factory;
  }

  doSomethingWithSofa(): void {
    // client doesn't care with sofa variant is used
    // as long as the abstract interface is used
    const sofa: ISofa = this.factory.createSofa();
    sofa.sitOn();
  }
}

const modernFactory: AbstractFactory = new ModernFactory();
const clientWithModern: Client = new Client(modernFactory); // initilization with modern factory
clientWithModern.doSomethingWithSofa(); // client can use all types of sofas

const victorianFactory: AbstractFactory = new VictorianFactory();
const clientWithVictorian: Client = new Client(victorianFactory);
clientWithVictorian.doSomethingWithSofa(); // client can use all types of sofas
