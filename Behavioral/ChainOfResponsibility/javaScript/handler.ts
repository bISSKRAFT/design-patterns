export interface ComponentWithContextualHelp {
  showHelp(): void;
}

export abstract class Component implements ComponentWithContextualHelp {
  tooltipText?: string;
  //NOTE: the containers is the next link in the chain of handlers
  container?: Container;

  showHelp(): void {
    if (this.tooltipText) {
      console.log(`tooltip: ${this.tooltipText}`);
    } else {
      if (this.container) {
        console.log("Component 'showHelp', calling container.showHelp");
        this.container.showHelp();
      } else {
        console.log("Component default 'showHelp'");
      }
    }
  }
}
export abstract class Container extends Component {
  children: Component[] = [];

  add(child: Component): void {
    this.children.push(child);
    child.container = this;
  }

  override showHelp(): void {
    console.log("Container 'showHelp', calling super...");
    super.showHelp();
  }
}
