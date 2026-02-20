import { Command } from "./command.ts";

export class CopyButton {
	private command?: any;

	setCommand(command: () => void): void {
		this.command = command;
	}
}
