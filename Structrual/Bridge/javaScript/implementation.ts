export interface Device {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
  getVolume(): number;
  setVolume(percentage: number): void;
  getChannel(): number;
  setChannel(channel: number): void;
}

export class Tv implements Device {
  private powerState: boolean = false;
  private volume: number = 0;
  private currentChannel = 0;

  isEnabled(): boolean {
    return this.powerState === true;
  }

  enable(): void {
    this.powerState = true;
  }

  disable(): void {
    this.powerState = false;
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(percentage: number): void {
    if (this.volume === 0) {
      return;
    }
    const absolute_change = (percentage * 100) / this.volume;
    this.volume - absolute_change;
  }

  getChannel(): number {
    return this.currentChannel;
  }

  setChannel(channel: number): void {
    this.currentChannel = channel;
  }
}
