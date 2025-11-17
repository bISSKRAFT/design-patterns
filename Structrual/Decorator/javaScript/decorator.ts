import { DataSource } from "./component.ts";

export abstract class DataSourceDecorator implements DataSource {
	wrappee: DataSource; // can be decoroter or component

	constructor(dataSource: DataSource) {
		this.wrappee = dataSource;
	}

	writeData(data: any): void {
		console.log('DataSourceDecorator before delegating "writeData"');
		this.wrappee.writeData(data);
	}
	readData(): string {
		console.log('DataSourceDecorator before delegating "readData"');
		return this.wrappee.readData();
	}
}

export class EncryptionDecorator extends DataSourceDecorator {

	constructor(dataSource: DataSource) {
		super(dataSource);
	}

	writeData(data: any): void {
		console.log('EncryptionDecorator before delegating "writeData"');
		super.writeData(data);
	}

	readData(): string {
		console.log('EncryptionDecorator before delegating "readData"');
		return super.readData();
	}
}

export class CompressionDecorator extends DataSourceDecorator {
	constructor(dataSource: DataSource) {
		super(dataSource);
	}

	writeData(data: any): void {
		console.log('CompressionDecorator before delegating "writeData"');
		super.writeData(data);
	}

	readData(): string {
		console.log('CompressionDecorator before delegating "writeData"');
		return super.readData();
	}
}
