import { Application } from "./application.ts";
import { Editor } from "./editor.ts";

export abstract class Command {
	protected app: Application;
	protected editor: Editor;
	protected backup?: string;

	constructor(app: Application, editor: Editor) {
		this.app = app;
		this.editor = editor;
	}

	saveBackup(): void {
		this.backup = this.editor.text;
	}

	undo(): void {
		this.editor.text = this.backup;
	}

	abstract execute(): void;
}

export class CommandHistory {
	history?: Command[];

	push(c: Command): void {
		this.history?.push(c);
	}

	pop(): Command | undefined {
		return this.history?.pop();
	}
}

export class CopyCommand extends Command {
	override execute(): void {
		this.app.clipboard = this.editor.getSelection();
	}
}
