import { Button, Dialog } from "./components.ts";

const button = new Button("OK");

button.showHelp();

console.log("--------");
button.tooltipText = "button tooltiptext";
button.modalHelpText = undefined;
button.showHelp();
console.log("--------");
const dialog = new Dialog();
const dialog1 = new Dialog();
const dialog2 = new Dialog();
dialog.add(button);
dialog.add(dialog1);
dialog1.add(dialog);
dialog2.add(dialog1);

dialog.showHelp();
console.log("----------");
dialog.children[0].showHelp();
