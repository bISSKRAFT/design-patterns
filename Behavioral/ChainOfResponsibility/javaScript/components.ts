import { Component, Container } from "./handler.ts";

export class Button extends Component {
  modalHelpText?: string;

  constructor(modelHelpText: string) {
    super();
    this.modalHelpText = modelHelpText;
  }

  override showHelp(): void {
    if (this.modalHelpText) {
      console.log(this.modalHelpText);
    } else {
      super.showHelp();
    }
  }
}

export class Dialog extends Container {
  override showHelp(): void {
    console.log("Dialog 'showHelp', calling super...");
    super.showHelp();
  }
}
