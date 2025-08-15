export interface ISofa {
  sitOn(): void;
}

export interface IPrototype {
  clone(): IPrototype;
}

export type IClonableSofa = IPrototype & ISofa;

export class ModernSofa implements ISofa {
  sitOn(): void {
    console.log("sitting on --modern-- sofa");
  }
}

export class VictorianSofa implements ISofa {
  sitOn(): void {
    console.log("sitting on --victorian-- sofa");
  }
}

export class ModernPrototypeSofa extends ModernSofa implements IPrototype {
  pillow: string;

  constructor(source?: ModernPrototypeSofa) {
    super();
    if (!source) {
      return;
    } else {
      this.pillow = "modern pillow";
    }
  }

  clone(): IClonableSofa {
    return new ModernPrototypeSofa(this);
  }
}
