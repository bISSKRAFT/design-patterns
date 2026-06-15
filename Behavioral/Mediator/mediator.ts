import { Button, Checkbox, Component } from "./component.ts";

export interface Mediator {
  notify(sender: string, event: string): void;
  register(id: string, component: Component): void;
}

export class AuthenticationDialog implements Mediator {
  private readonly components = new Map<String, Component>();

  register(id: string, component: Component): void {
    this.components.set(id, component);
  }

  notify(sender: string, event: string): void {
    const component = this.components.get(sender);
    if (!component) {
      console.log("Component not found!", sender);
      return;
    }
    if (sender === "button") {
      console.log("ok button: ", event);
    } else if (sender === "checkbox") {
      console.log("checkbox: ", event);
    }
  }
}
