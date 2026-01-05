import { ThirdPartyYoutubeClass, ThirdPartyYoutubeLib } from "./service.ts";

export class CachedYoutubeClass implements ThirdPartyYoutubeLib {
	service?: ThirdPartyYoutubeClass;

	private getService(): ThirdPartyYoutubeLib {
		if (!this.service) {
			this.service = new ThirdPartyYoutubeClass();
		}
		return this.service;
	}

	listVideos(): void {
		console.log("invoked proxy listVideos");
		const service = this.getService();
		service.listVideos();
	}

	getVideoinfo(id: string): void {
		console.log(`invoked proxy getVideoInfo with id ${id}`);
		const service = this.getService();
		service.getVideoinfo(id);
	}

	downloadVideo(id: string): void {
		console.log(`invoked proxy downloadVideo with id ${id}`);
		const service = this.getService();
		service.downloadVideo(id);
	}
}
