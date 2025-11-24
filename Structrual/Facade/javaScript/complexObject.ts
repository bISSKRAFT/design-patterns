// IMPORTANT: This simulates complex objects like large 3rd-party libraries
export class VideoCodec {

}

export class OggVideoCodec extends VideoCodec {

}

export class Mp4VideoCodec extends VideoCodec {

}

export class CodecFactory {
	static extract(file: VideoFile): VideoCodec {
		console.log(file);
		return new OggVideoCodec();
	}
}
export class VideoFile {
	private filename: string;
	constructor(filename: string) {
		this.filename = filename;
	}

	getFilename(): string {
		return this.filename;
	}
}

export class BitrateReader {
	static read(file: VideoFile, codec: VideoCodec) {

	}

	static convert(file, codec: VideoCodec) {

	}
}
