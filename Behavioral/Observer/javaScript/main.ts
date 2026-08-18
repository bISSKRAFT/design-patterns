import { Editor, Publisher } from "./publisher.ts";
import { LoggingListener } from "./subscriber.ts";

const publisher = new Publisher();

const editor = new Editor(publisher);

const subscriber = new LoggingListener();

publisher.subscribe("open", subscriber);
publisher.subscribe("save", subscriber);

editor.openFile("my/file");
editor.saveFile();

publisher.unsubscribe("save", subscriber);
editor.saveFile();
