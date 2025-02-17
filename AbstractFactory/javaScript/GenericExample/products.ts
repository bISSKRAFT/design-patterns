export interface ISofa {
  sitOn(): void;
}

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
