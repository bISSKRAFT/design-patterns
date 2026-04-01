import { FacebookIterator, Profile, ProfileIterator } from "./iterator.ts";
import { ProfileGraphFactory } from "./node.ts";

export interface SocialNetwork {
  createFriendsIterator(profileId: string): ProfileIterator;
  createCoworkersIterator(profileId: string): ProfileIterator;
}

export class Facebook implements SocialNetwork {
  private graphFactory: ProfileGraphFactory;

  constructor(graphFactory: ProfileGraphFactory) {
    this.graphFactory = graphFactory;
  }

  getProfiles(profileId: string, type: string): any {
    //TODO: create two graphs - one friend profile, one worker profile
    const test = this.graphFactory.createFriends();
    return test;
  }
  createFriendsIterator(profileId: string): ProfileIterator {
    throw new Error("Method not implemented.");
    return new FacebookIterator(this, "1", "type");
  }
  createCoworkersIterator(profileId: string): ProfileIterator {
    throw new Error("Method not implemented.");
  }
}
