export interface DataSource {
	writeData(data: any): void;
	readData(): any;
}

export class FileDataSource implements DataSource {
	filename: string;

	constructor(filename: string) {
		this.filename = filename;
	}

	writeData(data: any): void {
		console.log(`writing ${data} in FileDataSource`);
	}
	readData(): string {
		return 'read data';
	}
}
