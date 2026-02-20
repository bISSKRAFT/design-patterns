import { CopyButton } from "./button.ts";
import { Command, CommandHistory, CopyCommand } from "./command.ts";
import { Editor } from "./editor.ts";

export class Application {
	editors?: Editor[];
	activeEditor?: Editor;
	clipboard?: string;
	history?: CommandHistory;

	createUI(): void {
		//NOTE: creating the UI could look like this:
		//...
		const copy = () => {
			this.executeCommand(
				new CopyCommand(this, this.activeEditor!),
			);
		};
		const copyButton = new CopyButton();

		copyButton.setCommand(copy);
		//...
		////...
	}

	executeCommand(c: Command): void {
		if (c.execute() != null) {
			this.history?.push(c);
		}
	}

	undo(): void {
		const command = this.history?.pop();
		if (command) command.undo();
	}
}
