import { Mediator } from "./mediator.ts";

export class Component {
  dialog: Mediator;

  constructor(dialog: Mediator) {
    this.dialog = dialog;
  }

  click(): void {
    this.dialog.notify("button", "click");
    // OR: this.dialog.notify(this, "click");
  }

  keypress(): void {
    this.dialog.notify("button", "keypress");
    // OR: this.dialog.notify(this, "keypress");
  }
}

export class Button extends Component {
  constructor(dialog: Mediator) {
    super(dialog);
  }
}

export class Checkbox extends Component {
  constructor(dialog: Mediator) {
    super(dialog);
  }

  check(): void {
    this.dialog.notify("checkbox", "check");
  }
}
