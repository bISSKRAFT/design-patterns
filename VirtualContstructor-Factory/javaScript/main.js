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

const myCreator = new ConcreteCreator();
myCreator.someOperation();
