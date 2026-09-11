import { AudioPlayer } from "./context.ts";

export abstract class State {
  player: AudioPlayer;

  constructor(player: AudioPlayer) {
    this.player = player;
  }

  abstract clickLock(): void;

  abstract clickPlay(): void;
}

export class LockedState extends State {
  override clickLock(): void {
    console.log("clicked lock on LockedState");
    console.log("DOING SOMETHING");
  }

  override clickPlay(): void {
    console.log("clicked play on LockedState");
    console.log("do nothing");
  }
}

export class ReadySate extends State {
  override clickLock(): void {
    console.log("clicked lock on ReadyState");
    this.player.changeState(new LockedState(this.player));
  }

  override clickPlay(): void {
    console.log("clicked play on ReadyState");
    this.player.startPlayback();
    this.player.changeState(new PlayingState(this.player));
  }
}

export class PlayingState extends State {
  override clickLock(): void {
    console.log("clicked lock on PlayingState");
    this.player.changeState(new LockedState(this.player));
  }

  override clickPlay(): void {
    console.log("clicked play on PlayingState");
    this.player.stopPlayback();
    this.player.changeState(new ReadySate(this.player));
  }
}
