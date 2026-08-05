import { Editor, Snapshot } from "./memento.ts";

export class Command {
  private backup?: Snapshot;
  private originator: Editor;

  constructor(originator: Editor) {
    this.originator = originator;
  }

  makeBackup(): void {
    this.backup = this.originator.createSnapshot();
  }

  undo(): void {
    if (this.backup) {
      this.backup.restore();
    }
  }
}
