export class Product {
  constructor() {
    if (this.constructor === Product) {
      throw new Error("Abstract class can not be instantiated.");
    }
  }

  doStuff() {
    throw new Error("Cannot call abstract method");
  }
}

export class Creator {
  createProduct() {
    throw new Error("Cannot call abstract method");
  }

  someOperation() {
    const product = this.createProduct();
    product.doStuff();
  }
}
