import { Device } from "./implementation.ts";

export class Remote {
  device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  togglePower(): void {
    if (this.device.isEnabled()) {
      this.device.disable();
      console.log("disabled power");
    } else {
      this.device.enable();
      console.log("enabled power");
    }
  }

  volumeDown(): void {
    this.device.setVolume(this.device.getVolume() - 10);
  }

  volumeUp(): void {
    this.device.setVolume(this.device.getVolume() + 10);
  }

  channelDown(): void {
    this.device.setChannel(this.device.getChannel() - 1);
  }

  channelUp(): void {
    this.device.setChannel(this.device.getChannel() + 1);
  }
}

export class AdvancedRemote extends Remote {
  method(): void {
    this.device.setVolume(0);
  }
}
