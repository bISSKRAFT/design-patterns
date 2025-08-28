export interface IProduct {
  doStuff(): void;
}

export abstract class Creator {
  abstract createProduct(): IProduct;

  someOperation(): void {
    const product: IProduct = this.createProduct();
    product.doStuff();
  }
}
