import { Button, MacButton, WinButton } from "./buttons.ts";
import { Checkbox, MacCheckbox, WinCheckbox } from "./checkboxes.ts";

export abstract class GUIFactory {
  abstract createButton(): Button;
  abstract createCheckbox(): Checkbox;
}

export class MacFactory extends GUIFactory {
  override createButton(): Button {
    return new MacButton();
  }

  override createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

export class WinFactory extends GUIFactory {
  override createButton(): Button {
    return new WinButton();
  }

  override createCheckbox(): Checkbox {
    return new WinCheckbox();
  }
}
