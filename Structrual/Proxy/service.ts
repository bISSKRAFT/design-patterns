export interface ThirdPartyYoutubeLib {
	listVideos(): void;
	getVideoinfo(id: string): void;
	downloadVideo(id: string): void;
}

export class ThirdPartyYoutubeClass implements ThirdPartyYoutubeLib {
	constructor() {
		console.log("service object initalized");
	}

	listVideos() {
		console.log("invoked original 'listVideos'");
	}

	getVideoinfo(id: string): void {
		console.log(`invoked original getVideoInfo with id ${id}`);
	}

	downloadVideo(id: string): void {
		console.log(`invoked original downloadVideo with id ${id}`);
	}
}
