export abstract class Checkbox {
  abstract render(): void;
}

export class MacCheckbox extends Checkbox {
  override render(): void {
    console.log("rendering Mac checkbox");
  }
}

export class WinCheckbox extends Checkbox {
  override render(): void {
    console.log("rendering Win checkbox");
  }
}
