export class Editor {
	//NOTE: It plays the role of the "receiver"
	// all commands delegate the _actual_ work to here

	text?: string;

	getSelection(): string | undefined {
		console.log(`Editor.getSelection() invoked`);
		return undefined;
	}

	deleteSelection(): void {
		console.log(`Editor.deleteSelection() invoked`);
	}

	replaceSelection(text: string): void {
		console.log(`Editor.deleteSelection(${text}) invoked`);
	}
}
