import { Button, Checkbox } from "./component.ts";
import { AuthenticationDialog } from "./mediator.ts";

const mediator = new AuthenticationDialog();
const button = new Button(mediator);
const chekcbox = new Checkbox(mediator);

mediator.register("button", button);
mediator.register("checkbox", chekcbox);

button.click();
chekcbox.check();
