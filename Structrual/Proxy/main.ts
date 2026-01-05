import { CachedYoutubeClass } from "./proxy.ts";
import { ThirdPartyYoutubeClass, ThirdPartyYoutubeLib } from "./service.ts";

class YoutubeManager {
	service: ThirdPartyYoutubeLib;

	constructor(service: ThirdPartyYoutubeLib) {
		this.service = service;
	}

	doWork() {
		this.service.downloadVideo("1");
	}
}

const proxy = new CachedYoutubeClass();
const manager = new YoutubeManager(proxy); // client

manager.doWork();
