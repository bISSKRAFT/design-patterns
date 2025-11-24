import { BitrateReader, CodecFactory, Mp4VideoCodec, VideoFile } from "./complexObject";

export class VideoConverter {
	convert(filename: string, format: string) {
		const file = new VideoFile(filename);
		const sourceCodec = CodecFactory.extract(file)
		const buffer = BitrateReader.read(file, sourceCodec);
		const targetCodec = new Mp4VideoCodec();
		const result = BitrateReader.convert(buffer, targetCodec);
		return result;
	}
}
