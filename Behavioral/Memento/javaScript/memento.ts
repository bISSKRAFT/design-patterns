export class Editor {
  text: string = "";
  curX: number = 0;
  curY: number = 0;
  selectionWidth: number = 0;

  setText(text: string): void {
    this.text = text;
  }

  setCursor(x: number, y: number): void {
    this.curX = x;
    this.curY = y;
  }

  setSelectionWidth(width: number): void {
    this.selectionWidth = width;
  }

  createSnapshot(): Snapshot {
    return new Snapshot(
      this,
      this.text,
      this.curX,
      this.curY,
      this.selectionWidth,
    );
  }
}
export class Snapshot {
  private editor: Editor;
  private text: string;
  private curX: number;
  private curY: number;
  private selectionWidth: number;

  constructor(
    editor: Editor,
    text: string,
    curX: number,
    curY: number,
    selectionWidth: number,
  ) {
    this.editor = editor;
    this.text = text;
    this.curX = curX;
    this.curY = curY;
    this.selectionWidth = selectionWidth;
  }

  restore(): void {
    this.editor.setText(this.text);
    this.editor.setCursor(this.curX, this.curY);
    this.editor.setSelectionWidth(this.selectionWidth);
  }
}
