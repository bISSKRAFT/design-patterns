import { Command } from "./caretaker.ts";
import { Editor } from "./memento.ts";

const originator = new Editor();

originator.setText("Text");
originator.setCursor(1, 1);
originator.setSelectionWidth(1);

const caretaker = new Command(originator);

caretaker.makeBackup();
console.log("text after backup: ", originator.text);

// mutating editor
originator.setText("NEW TEXT");
console.log("Text after setText: ", originator.text);

caretaker.undo();
console.log("Text after Undo: ", originator.text);
