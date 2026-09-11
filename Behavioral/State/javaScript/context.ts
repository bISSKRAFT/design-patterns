import { ReadySate, State } from "./state.ts";

export class AudioPlayer {
  state: State;

  constructor() {
    this.state = new ReadySate(this);
  }

  changeState(state: State) {
    this.state = state;
  }

  startPlayback(): void {
    console.log("starting playback..");
  }

  stopPlayback(): void {
    console.log("stopping playback..");
  }

  clickLock(): void {
    console.log("clicked lock on context, delegating..");
    this.state.clickLock();
  }

  clickPlay(): void {
    console.log("clicked play on context, delegating..");
    this.state.clickPlay();
  }
}
