import { Button } from "./buttons.ts";
import { Checkbox } from "./checkboxes.ts";
import { GUIFactory, MacFactory, WinFactory } from "./factories.ts";

class Application {
  private factory: GUIFactory; // Or even an more abstract interface
  protected button: Button;
  protected checkbox: Checkbox;

  constructor(factory: GUIFactory) {
    this.factory = factory;
  }

  createUI(): void {
    this.button = this.factory.createButton();
    this.checkbox = this.factory.createCheckbox();
  }

  paint(): void {
    this.button.render();
    this.checkbox.render();
  }
}

/*  reading configuration and choosing factory */
//const factory: GUIFactory = new MacFactory();
const factory: GUIFactory = new WinFactory();

const app: Application = new Application(factory);
app.createUI();
app.paint();
