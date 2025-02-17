export abstract class Button {
  abstract render(): void;
}

export class MacButton extends Button {
  override render(): void {
    console.log("rendering Mac button");
  }
}

export class WinButton extends Button {
  override render(): void {
    console.log("rendering Wing button");
  }
}
