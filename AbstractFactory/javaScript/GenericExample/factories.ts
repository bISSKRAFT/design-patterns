import { ModernSofa, ISofa, VictorianSofa } from "./products.ts";

export abstract class AbstractFactory {
  abstract createSofa(): ISofa;
}

export class ModernFactory extends AbstractFactory {
  createSofa(): ISofa {
    return new ModernSofa();
  }
}

export class VictorianFactory extends AbstractFactory {
  createSofa(): ISofa {
    return new VictorianSofa();
  }
}
