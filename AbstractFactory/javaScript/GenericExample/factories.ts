import {
  ModernSofa,
  ISofa,
  IClonableSofa,
  VictorianSofa,
  ModernPrototypeSofa,
} from "./products.ts";

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

// Combination with Prototype pattern
//
export class ModernPrototypeFactory extends AbstractFactory {
  private readonly sofa: ModernPrototypeSofa;

  constructor(prototypeSofa: ModernPrototypeSofa) {
    super();
    this.sofa = prototypeSofa;
  }

  createSofa(): ISofa {
    return this.sofa.clone();
  }

  createAnotherProduct() {
    return new Error("Not Implemented!");
  }
}
