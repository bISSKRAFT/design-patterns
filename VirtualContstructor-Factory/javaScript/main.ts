import { Creator, IProduct } from "./classes.ts";

class Product implements IProduct {
  doStuff(): void {
    console.log("Concrete Product does something");
  }
}

class ConcreteCeator extends Creator {
  createProduct(): IProduct {
    return new Product();
  }
}

const creator = new ConcreteCeator();
creator.someOperation();
