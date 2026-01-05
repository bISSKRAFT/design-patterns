import { ThirdPartyYoutubeClass, ThirdPartyYoutubeLib } from "./service.ts";

export class CachedYoutubeClass implements ThirdPartyYoutubeLib {
	service: ThirdPartyYoutubeClass;

	constructor(service: ThirdPartyYoutubeClass) {
		this.service = service;
	}

	listVideos(): void {
		console.log("invoked proxy listVideos");
		this.service.listVideos();
	}

	getVideoinfo(id: string): void {
		console.log(`invoked proxy getVideoInfo with id ${id}`);
		this.service.getVideoinfo(id);
	}

	downloadVideo(id: string): void {
		console.log(`invoked proxy downloadVideo with id ${id}`);
		this.service.downloadVideo(id);
	}
}
