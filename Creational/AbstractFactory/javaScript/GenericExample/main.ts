import {
  AbstractFactory,
  ModernFactory,
  VictorianFactory,
  ModernPrototypeFactory,
} from "./factories.ts";
import { ISofa, ModernPrototypeSofa } from "./products.ts";

class Client {
  factory: AbstractFactory;

  constructor(factory: AbstractFactory) {
    // every variant factory can be used here
    this.factory = factory;
  }

  doSomethingWithSofa(): void {
    // client doesn't care which sofa variant is used
    // as long as the abstract interface is used
    const sofa: ISofa = this.factory.createSofa();
    sofa.sitOn();
  }
}

const modernFactory: AbstractFactory = new ModernFactory();
const clientWithModern: Client = new Client(modernFactory); // initialization with modern factory
clientWithModern.doSomethingWithSofa(); // client can use all types of sofas

const victorianFactory: AbstractFactory = new VictorianFactory();
const clientWithVictorian: Client = new Client(victorianFactory);
clientWithVictorian.doSomethingWithSofa(); // client can use all types of sofas

const modernPrototypeFactory = new ModernPrototypeFactory(
  new ModernPrototypeSofa(),
);
const client = new Client(modernPrototypeFactory);
client.doSomethingWithSofa();
