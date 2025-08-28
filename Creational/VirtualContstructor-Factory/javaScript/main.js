import { Product, Creator } from "./classes.js";

class ConcreteProduct extends Product {
  doStuff() {
    console.log("ConcreteProduct does stuff");
  }
}

class ConcreteCreator extends Creator {
  createProduct() {
    return new ConcreteProduct();
  }
}

class InvalidCreator extends Creator {
  createProduct() {
    return {
      doStuff() {
        console.log("not a Product");
      },
    };
  }
}

const myCreator = new ConcreteCreator();
myCreator.someOperation();
console.log("-------------------------");
const invalidCreator = new InvalidCreator();
invalidCreator.someOperation();
