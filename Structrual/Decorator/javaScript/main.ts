import { DataSource, FileDataSource } from "./component.ts";
import { CompressionDecorator, EncryptionDecorator } from "./decorator.ts";

let stack: DataSource = new FileDataSource('fileName');
stack = new CompressionDecorator(stack);
stack = new EncryptionDecorator(stack);

console.log(`result: ${stack.readData()}`);
stack.writeData('writing data..');

